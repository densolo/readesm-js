
import * as padStart from 'lodash/padStart';

import RawData from 'DataTypes/RawData';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import Convereter from 'utils/Converter';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';


export default class BcdMonthYear extends Block {

    encodedDate: RawData;

    constructor(data: ArrayBuffer) {
        super();
        this.encodedDate = DataReader.readRawData(data, 0, 2);
    }

    className() {
        return "BcdMonthYear";
    }

    size() {
        return 2;
    }

    toString() {
        let d = this.encodedDate.toUint8Array();
        return "20" + padStart(Convereter.bcdbyte(d[1]), 2, '0') + '-' + padStart(Convereter.bcdbyte(d[0]), 2, '0');
    }

    printOn(report: Reporter) {
        report.tagValuePair(tr("encodedDate"), this.encodedDate.toString());
    }
}
