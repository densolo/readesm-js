// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class


import * as padStart from 'lodash/padStart';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import Converter from 'utils/Converter';
import QString from 'utils/QString';
import RawData from 'DataTypes/RawData';
import CardBlock from 'CardBlocks/CardBlock';
import VuBlock from 'VuBlocks/VuBlock';
import DataType from 'DataTypes/DataType';
import FormatStrings from 'utils/FormatStrings';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';

import BcdMonthYear from 'DataTypes/BcdMonthYear';


export default class KeyIdentifier extends DataType {

    static BLOCK_TYPE = 0;
    

    certificateRequestSerialNumber: RawData;
    date: BcdMonthYear;
    type: number;
    manufacturerCode: number;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.certificateRequestSerialNumber = DataReader.readRawData(data, 0, 4);
        this.date = new BcdMonthYear(data.slice(4))
        this.type = DataReader.readUint8(data, 6);
        this.manufacturerCode = DataReader.readUint8(data, 7);    
    }

    className() {
        return "KeyIdentifier";
    }

    title() {
        return "";
    }

    
    size() {
        return 8;
    }


    toString() {
		let qs = new QString('KeyIdentifier');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("certificateRequestSerialNumber"), this.certificateRequestSerialNumber.toString());
        report.writeBlock(this.date, tr("date"));
        report.tagValuePair(tr("type"), this.type);
        report.tagValuePair(tr("manufacturerCode"), FormatStrings.manufacturerCode(this.manufacturerCode));
    }
}

