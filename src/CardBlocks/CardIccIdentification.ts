import CardBlock from "./CardBlock";


export default class CardIccIdentification extends CardBlock {
    
    static BLOCK_TYPE = 0x0002;

    constructor(data: ArrayBuffer) {
        super(data);
    }
}