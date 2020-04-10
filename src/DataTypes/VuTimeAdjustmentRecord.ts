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

import TimeReal from 'DataTypes/TimeReal';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuTimeAdjustmentRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    oldTimeValue: TimeReal;
    newTimeValue: TimeReal;
    workshopName: string;
    workshopAddress: string;
    workshopCardNumber: FullCardNumber;
    static staticSize: number = 98;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.oldTimeValue = new TimeReal(data.slice(0))
        this.newTimeValue = new TimeReal(data.slice(4))
        this.workshopName = DataReader.readString(data, 8, 36).toString();
        this.workshopAddress = DataReader.readString(data, 44, 36).toString();
        this.workshopCardNumber = new FullCardNumber(data.slice(80))    
    }

    className() {
        return "VuTimeAdjustmentRecord";
    }

    title() {
        return "";
    }

    size() {
        return 98;
    }

    toString() {
		let qs = new QString('VuTimeAdjustmentRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.oldTimeValue, tr("oldTimeValue"));
        report.writeBlock(this.newTimeValue, tr("newTimeValue"));
        report.tagValuePair(tr("workshopName"), this.workshopName);
        report.tagValuePair(tr("workshopAddress"), this.workshopAddress);
        report.writeBlock(this.workshopCardNumber, tr("workshopCardNumber"));
    }
}

