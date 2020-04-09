
import Block from 'DataTypes/Block';
import TimeReal from 'DataTypes/TimeReal';
import DataReader from 'utils/DataReader';
import { tr } from 'utils/Translation';


export default class Timespan extends Block {

    begin: TimeReal;
    end: TimeReal;

    constructor(data?: ArrayBuffer) {
        super()
        this.begin = new TimeReal(data);
        this.end = new TimeReal(data.slice(4));
    }

    toString() {
        //TODO
        return `From ${this.begin} To ${this.end}`
    }

}