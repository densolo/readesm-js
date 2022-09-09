
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import DataReader from 'utils/DataReader';


export default class VuBlock extends TopLevelBlock {

    constructor(data: ArrayBuffer) {
        super();
        this.nextBlock = new Uint8Array(data).indexOf(0x76, 1)
    }
}
