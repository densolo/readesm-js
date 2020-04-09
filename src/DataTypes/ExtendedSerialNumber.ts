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

import BcdMonthYear from 'DataTypes/BcdMonthYear';


export default class ExtendedSerialNumber extends DataType {

    static BLOCK_TYPE = 0;
    

    serialNumber: number;
    date: BcdMonthYear;
    equipmentType: number;
    manufacturerCode: number;
    static staticSize: number = 8;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.serialNumber = DataReader.readUint32(data, 0);
        this.date = new BcdMonthYear(data.slice(4))
        this.equipmentType = DataReader.readUint8(data, 6);
        this.manufacturerCode = DataReader.readUint8(data, 7);    
    }

    className() {
        return "ExtendedSerialNumber";
    }

    title() {
        return "";
    }

    size() {
        return 8;
    }

    toString() {
		let qs = new QString("%1 (%2) %3, %4")
		.arg(this.serialNumber)
		.arg(this.date.toString())
		.arg(FormatStrings.equipmentType(this.equipmentType))
		.arg(FormatStrings.manufacturerCode(this.manufacturerCode)).toString();
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("serialNumber"), this.serialNumber);
        report.writeBlock(this.date, tr("date"));
        report.tagValuePair(tr("equipmentType"), FormatStrings.equipmentType(this.equipmentType));
        report.tagValuePair(tr("manufacturerCode"), FormatStrings.manufacturerCode(this.manufacturerCode));
    }
}

