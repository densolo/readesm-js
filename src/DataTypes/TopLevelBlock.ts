
import Block from 'DataTypes/Block';


export default class TopLevelBlock extends Block {

    public static BLOCK_TYPE: number = 0;

    validSignature: boolean;
    hasSignature: boolean;
    nextBlock: number

    constructor(data) {
        super(data);

        this.validSignature = false;
        this.hasSignature = false;
    }

    getBlockType() {
        return (<typeof TopLevelBlock>this.constructor).BLOCK_TYPE;
    }
}
