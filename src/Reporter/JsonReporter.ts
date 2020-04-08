
import Reporter from 'Reporter/Reporter';
import Block from 'DataTypes/Block';
import * as isEmpty from 'lodash/isEmpty';


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
            title: title,
            className: className
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

    renderReport(): string {
        return JSON.stringify(this.jsonCollected, null, 4);
    }

    tagValuePair(tag: string, value: string) {
        this.currentEntry[tag] = value;
    }

    writeBlock(value: Block, tag: string = '') {
        if (isEmpty(tag)) {
            tag = value.title() || value.toString();
            let newEntry = JsonEntry.build(tag, value.className());
            this.nestPath.push(newEntry);
            if (!this.currentEntry.blocks) {
                this.currentEntry.blocks = [];
            }
            this.currentEntry.blocks.push(newEntry);
            
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
