// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class


import * as padStart from 'lodash/padStart';
import Block from 'DataTypes/Block';
import Subblocks from 'DataTypes/Subblocks';
import RawData from 'DataTypes/RawData';
import DataType from 'DataTypes/DataType';
import DataReader from 'utils/DataReader';
import Converter from 'utils/Converter';
import QString from 'utils/QString';
import FormatStrings from 'utils/FormatStrings';
import CardBlock from 'CardBlocks/CardBlock';
import VuBlock from 'VuBlocks/VuBlock';
import Reporter from 'Reporter/Reporter';

import {tr} from 'utils/Translation';



export default class BcdMonthYear extends DataType {

    static BLOCK_TYPE = 0;
    

    encodedDate: RawData;
    static staticSize: number = 2;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.encodedDate = DataReader.readRawData(data, 0, 2);    
    }

    className() {
        return "BcdMonthYear";
    }

    title() {
        return "";
    }

    size() {
        return 2;
    }

    toString() {
		let qs = '';
		let d = this.encodedDate.toUint8Array();
		qs = "20" + padStart(Converter.bcdbyte(d[1]), 2, '0') + '-' + padStart(Converter.bcdbyte(d[0]), 2, '0');;
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("encodedDate"), this.encodedDate.toString());
    }
}

