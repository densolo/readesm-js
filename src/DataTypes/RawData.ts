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
        return RawData.toHexString(new Uint8Array(this.data));
    }

    static toHexString(data: Uint8Array): string {
        let allzeros = findIndex(data, (c) => {return c !== 0;}) < 0;
        if (allzeros) {
            return tr(`All ${data.byteLength} Bytes are zeroed.`);
        }

        let rv = '';
        data.forEach((c) => {
            rv += ('0' + c.toString(16)).slice(-2) + ' ';
        });
        return rv.replace(/ *$/, '');
    }

    toTextString() {
        return String.fromCharCode.apply(null, new Uint8Array(this.data));
    }

    toUint8Array() {
        return new Uint8Array(this.data);
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
}
