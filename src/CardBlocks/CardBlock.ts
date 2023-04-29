
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import DataReader from 'utils/DataReader';


export default class CardBlock extends TopLevelBlock {

    datasize: number;

    constructor(data: ArrayBuffer) {
        super(data);

        this.datasize = DataReader.readUint16(data, 3);

        let bytesLeft = data.slice(5 + this.datasize).byteLength;
        if (bytesLeft >= 5 + 128) {
            if (DataReader.readUint16(data, 5 + this.datasize) == DataReader.readUint16(data, 0)
                && DataReader.readUint8(data, 5 + this.datasize + 2) == 1) {
                this.hasSignature = true;
            }
        }
    }

    dataBlockSize() {
        return this.datasize + 5;
    }

    size() {
        return this.datasize + 5 + (this.hasSignature ? 5 + 128 : 0);
    }
}
