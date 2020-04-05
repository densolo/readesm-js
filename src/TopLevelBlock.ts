
export default class TopLevelBlock {

    public static BLOCK_TYPE: number = 0;
    hasSignature: boolean;

    constructor() {

    }

    size(): number {
        return 0;
    }

    getBlockType() {
        return (<typeof TopLevelBlock>this.constructor).BLOCK_TYPE;        
    }
}
