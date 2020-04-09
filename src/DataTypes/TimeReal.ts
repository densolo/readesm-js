
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import { tr } from 'utils/Translation';


export default class TimeReal extends Block {

    time: Date;
    
    constructor(data: ArrayBuffer) {
        super();

        let tm = DataReader.readUint32(data, 0);
        if (tm) {
            this.time = TimeReal.fromTime_t(tm);
        }
    }

    static fromTime_t(seconds: number) {
        return new Date(seconds * 1000);
    }

    toString() {
        if (!this.time) {
            return tr("undefined");            
        }

        if (this.time.getHours() == 0 && this.time.getMinutes() == 0 && this.time.getSeconds() == 0) {
            return this.time.toDateString();
        }

        return this.time.toString();
    }
}
