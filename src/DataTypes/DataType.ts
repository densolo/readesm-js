
import Block from 'DataTypes/Block';


export default class DataType extends Block {

    constructor(data?: ArrayBuffer) {
        super(data);
    }

    isDefaultValue() {
        let items = new Uint8Array(this.dataStart.slice(0, this.size()));
        for(let j = 0; j < items.length; j++) {
            if (items[j] != 0x0 && items[j] != 0xFF && items[j] != 0x20) {
                return false;
            }
        }
        return true;
    }
}