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
import Timespan from 'DataTypes/Timespan';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuControlActivityRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    controlType: number;
    controlTime: TimeReal;
    controlCardNumber: FullCardNumber;
    downloadPeriod: Timespan;
    static staticSize: number = 31;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.controlType = DataReader.readUint8(data, 0);
        this.controlTime = new TimeReal(data.slice(1))
        this.controlCardNumber = new FullCardNumber(data.slice(5))
        this.downloadPeriod = new Timespan(data.slice(23))    
    }

    className() {
        return "VuControlActivityRecord";
    }

    title() {
        return "";
    }

    size() {
        return 31;
    }

    toString() {
		let qs = new QString('VuControlActivityRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("controlType"), FormatStrings.controlType(this.controlType));
        report.writeBlock(this.controlTime, tr("controlTime"));
        report.writeBlock(this.controlCardNumber, tr("controlCardNumber"));
        report.writeBlock(this.downloadPeriod, tr("downloadPeriod"));
    }
}

