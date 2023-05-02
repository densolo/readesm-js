
import TopLevelBlock from 'DataTypes/TopLevelBlock';


export default class VuBlock extends TopLevelBlock {

    constructor(data: ArrayBuffer) {
        super(data);
    }

    getNext(data, next) {
        const _data = new Uint8Array(data)
        let i = 0
        while (i != -1) {
            i = _data.indexOf(0x76, i+1)
            if (_data[i + 1] == next) return i
        }
    }
}
