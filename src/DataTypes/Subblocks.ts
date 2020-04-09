
import DataType from 'DataTypes/DataType';
import Reporter from 'Reporter/Reporter';


export default class Subblocks<T extends DataType> extends DataType {

    protected items: T[];
    protected numberOfBytes: number;

    constructor() {
        super();

        this.numberOfBytes = 0;
        this.items = [];
    }

	append(block: T) {
        if (!block.isDefaultValue()) {
            this.items.push(block);
        }
        this.numberOfBytes += block.size();
        //console.log("this.numberOfBytes: " + this.numberOfBytes);
    }

    get(i: number): T {
        return this.items[i];
    }

    numberOfBlocks() {
        return this.items.length;
    }

    size() {
        return this.numberOfBytes;
    }

    printOn(o: Reporter) {
        o.writeArray(this, this.title())
    }

    className() {
        return `Subblocks<${this.constructor.name}>`;
    }
}
