import * as findIndex from 'lodash/findIndex';
import { tr } from 'utils/Translation';
import Block from 'DataTypes/Block';
import Reporter from 'Reporter/Reporter';


export default class RawData extends Block {

    data: ArrayBuffer;

    constructor(data: ArrayBuffer, length: number) {
        super();
        this.data = data.slice(0, length);
    }

    toString() {
        let items = new Uint8Array(this.data);
        let allzeros = findIndex(items, (c) => {return c !== 0;}) < 0;
        if (allzeros) {
            return tr(`All ${this.size()} Byte are zeroed.`);
        }

        let rv = '';
        items.forEach((c) => {
            rv += ('0' + c.toString(16)).slice(-2) + ' ';
        });
        return rv.replace(/ *$/, '');
    }

    printOn(report: Reporter) {
        report.tagValuePair("Raw data(hex encoded)", this.toString());
    }

    className() {
        return "RawData";
    }

    size() {
        return this.data.byteLength;
    }

    toUint8Array() {
        return new Uint8Array(this.data);
    }
}
