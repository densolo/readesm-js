
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import DataReader from 'utils/DataReader';


export default class CardBlock extends TopLevelBlock {
    
    datasize: number;

    constructor(data: ArrayBuffer) {
        super();

        this.datasize = DataReader.readUint16(data, 3);
    }
    
    size() {
        return this.datasize + 5 + (this.hasSignature ? 5 + 128 : 0);
    }
}
