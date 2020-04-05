
import * as isEmpty from 'lodash/isEmpty';

import Block from 'DataTypes/Block';
import Subblocks from 'DataTypes/Subblocks';

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

    tagValuePair(tag: string, value: string|number) {
    }

    writeArray(ray: Subblocks, title: string = '', defaultShown: boolean = true) {
        this.arrayStart(ray.numberOfBlocks(), this.title, defaultShown);
        this.nestLevel += 1;
        for (let j = 0; j < ray.numberOfBlocks(); j++) {
            this.writeBlock(ray.get(j));
        }
    }

    writeBlock(value: Block, tag: string = '') {
        this.nestLevel += 1;
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