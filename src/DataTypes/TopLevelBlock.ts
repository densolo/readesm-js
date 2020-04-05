
import Block from 'DataTypes/Block';


export default class TopLevelBlock extends Block {

    public static BLOCK_TYPE: number = 0;
    hasSignature: boolean;

    constructor() {
        super();
    }

    getBlockType() {
        return (<typeof TopLevelBlock>this.constructor).BLOCK_TYPE;        
    }
}
