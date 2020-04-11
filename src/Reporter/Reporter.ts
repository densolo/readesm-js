
import * as isEmpty from 'lodash/isEmpty';

import Block from 'DataTypes/Block';
import DataType from 'DataTypes/DataType';
import Subblocks from 'DataTypes/Subblocks';
import QString from 'utils/QString';


export default class Reporter {

    protected title: string;
    protected nestLevel: number;
    protected collected: string;
    
    constructor() {
        this.nestLevel = 0;
        this.collected = '';
    }

    setTitle(newTitle: string) {
        this.title = newTitle;
    }

    allowSvg() {
        return false;
    }

    tagValuePair(tag: string|QString, value: string|number) {
    }

    writeArray<T extends DataType>(ray: Subblocks<T>, title: string = '', defaultShown: boolean = true) {        
        this.arrayStart(ray.numberOfBlocks(), title, defaultShown);
        this.nestLevel += 1;
        for (let j = 0; j < ray.numberOfBlocks(); j++) {
            this.writeBlock(ray.get(j));
        }
        this.nestLevel -= 1;
        this.arrayEnd(ray.numberOfBlocks());
    }

    writeBlock(value: Block, tag: string|QString = '') {
        this.nestLevel += 1;
        tag = tag.toString();
        if (isEmpty(tag) && !isEmpty(value.title())) {
            this.subBlock(value, value.title());
        } else {
            this.subBlock(value, tag);
        }
        this.nestLevel -= 1;
    }

    subBlock(value: Block, tag: string) {

    }

    arrayStart(count: number, title: string, defaultShown: boolean) {
    }

    arrayEnd(count: number) {
    }
}
