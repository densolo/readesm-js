

import RawData from 'DataTypes/RawData';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import Convereter from 'utils/Converter';


export default class BcdMonthYear extends Block {

    encodedDate: RawData;

    constructor(data: ArrayBuffer) {
        super();
        this.encodedDate = DataReader.readRawData(data, 0, 2);
    }

    toString() {
        return "20" + Convereter.bcdbyte(this.encodedDate[1]) + '-' + Convereter.bcdbyte(this.encodedDate[0]);
    }

    size() {
        return 2;
    }
}