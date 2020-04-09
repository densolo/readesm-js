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

import Timespan from 'DataTypes/Timespan';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuCompanyLocksRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    lockTime: Timespan;
    companyName: string;
    companyAddress: string;
    companyCardNumber: FullCardNumber;
    static staticSize: number = 98;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.lockTime = new Timespan(data.slice(0))
        this.companyName = DataReader.readCodePageString(data, 8, 36).toString();
        this.companyAddress = DataReader.readCodePageString(data, 44, 36).toString();
        this.companyCardNumber = new FullCardNumber(data.slice(80))    
    }

    className() {
        return "VuCompanyLocksRecord";
    }

    title() {
        return "";
    }

    size() {
        return 98;
    }

    toString() {
		let qs = new QString('VuCompanyLocksRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.lockTime, tr("lockTime"));
        report.tagValuePair(tr("companyName"), this.companyName);
        report.tagValuePair(tr("companyAddress"), this.companyAddress);
        report.writeBlock(this.companyCardNumber, tr("companyCardNumber"));
    }
}

