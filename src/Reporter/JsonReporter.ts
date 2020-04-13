
import Reporter from 'Reporter/Reporter';
import Block from 'DataTypes/Block';
import DataType from 'DataTypes/DataType';
import Subblocks from 'DataTypes/Subblocks';
import * as isEmpty from 'lodash/isEmpty';
import QString from 'utils/QString';
import CardActivityDailyRecord from 'DataTypes/CardActivityDailyRecord';


class JsonEntry {
    title: string;
    className: string;
    blocks: JsonEntry[];

    constructor(title: string = undefined, className: string = undefined) {
        this.title = title;
        this.className = className;
    }

    static build(title: string = undefined, className: string = undefined) {
        return {
            title: title
        } as JsonEntry;
    }
}


export default class JsonReporter extends Reporter {

    jsonCollected: JsonEntry;
    nestPath: JsonEntry[];
    currentEntry: JsonEntry;
    
    constructor() {
        super();

        this.jsonCollected = JsonEntry.build();
        this.nestPath = [this.jsonCollected];
        this.currentEntry = this.jsonCollected;
    }

    setTitle(newTitle: string) {
        super.setTitle(newTitle);
        this.jsonCollected['title'] = newTitle;
    }

    normalizeJsonReport() {
        let r = (this.jsonCollected['CardDriverActivity'] || {}).CardActivityDailyRecord;

        let dailyRecords = {};
        if (r && r.records) {
            r.records.forEach((d: CardActivityDailyRecord) => {
                dailyRecords[d.activityRecordDate.toString()] = d;
            });

            r['dailyRecords'] = dailyRecords;
            delete r.records
        }
    }

    renderReport(): string {
        this.normalizeJsonReport();
        return JSON.stringify(this.jsonCollected, null, 4);
    }

    tagValuePair(tag: string|QString, value: string) {
        this.currentEntry[tag.toString()] = value;
    }

    writeArray<T extends DataType>(ray: Subblocks<T>, title: string = '', defaultShown: boolean = true) {        
        this.nestLevel += 1;
        for (let j = 0; j < ray.numberOfBlocks(); j++) {
            let value = ray.get(j);
            let tag = value.title() || value.toString();
            let newEntry = JsonEntry.build(tag, value.className());
            this.nestPath.push(newEntry);

            if (!this.currentEntry[value.className()]) {
                this.currentEntry[value.className()] = {
                    'records': []
                };
            }
            this.currentEntry[value.className()].records.push(newEntry);

            this.currentEntry = newEntry;
            this.nestLevel += 1;

            this.subBlock(value, tag);
            
            this.nestPath.pop();
            this.currentEntry = this.nestPath.slice(-1)[0];
            this.nestLevel -= 1;
        }
        this.nestLevel -= 1;
    }

    writeBlock(value: Block, tag: string = '') {
        if (isEmpty(tag)) {
            tag = value.title() || value.toString();
            let newEntry = JsonEntry.build(tag, value.className());
            this.nestPath.push(newEntry);

            if (!this.currentEntry[value.className()]) {
                this.currentEntry[value.className()] = newEntry;
            } else {
                console.warn(`The block attribute will override ${this.currentEntry}::${value.className}`);
            }

            this.currentEntry = newEntry;
            this.nestLevel += 1;

            this.subBlock(value, tag);
            
            this.nestPath.pop();
            this.currentEntry = this.nestPath.slice(-1)[0];
            this.nestLevel -= 1;
        } else {
            let newEntry = JsonEntry.build(value.title() || value.toString(), value.className());
            this.currentEntry[tag] = newEntry;
            this.currentEntry = newEntry;

            this.subBlock(value, tag);
            
            this.currentEntry = this.nestPath.slice(-1)[0];
        }
    }

    subBlock(value: Block, tag: string) {

        value.printOn(this);
        
    }

    allowSvg() {
        return false;
    }

    arrayStart(count: number, title: string, defaultShown: boolean) {
        
    }

    arrayEnd(count: number) {
    
    }
}
