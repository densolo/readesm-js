
import Block from 'DataTypes/Block';
import Reporter from 'Reporter/Reporter';


export default class Subblocks extends Block {

    protected array: Block[];
    protected numberOfBytes: number;

    constructor() {
        super();
    }

    get(i: number) {
        return this.array[i];
    }

    numberOfBlocks() {
        return this.array.length;
    }

    size() {
        return this.numberOfBytes;
    }

    printOn(o: Reporter) {
        o.writeArray(this, this.title())
    }

    className() {
        return 'Subblocks';
    }
}
