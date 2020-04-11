
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
    
    date() {
        return this.time;
    }

    static fromTime_t(seconds: number) {
        return new Date(seconds * 1000);
    }

    toString() {
        if (!this.time) {
            return tr("undefined");            
        }

        let rv = this.time.toJSON();
        if (rv.match(/.*T00:00:00.000Z$/)) {
            rv = rv.slice(0, 10);
        }
        return rv;
    }
}
