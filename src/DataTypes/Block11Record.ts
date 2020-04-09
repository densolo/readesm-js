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


export default class Block11Record extends DataType {

    static BLOCK_TYPE = 0;
    

    cardNumber: FullCardNumber;
    time: Timespan;
    sometimesDuration: number;
    payloadData: RawData;
    static staticSize: number = 58;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardNumber = new FullCardNumber(data.slice(0))
        this.time = new Timespan(data.slice(18))
        this.sometimesDuration = DataReader.readUint16(data, 26);
        this.payloadData = DataReader.readRawData(data, 28, 30);    
    }

    className() {
        return "Block11Record";
    }

    title() {
        return "";
    }

    size() {
        return 58;
    }

    toString() {
		let qs = new QString('Block11Record');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.cardNumber, tr("cardNumber"));
        report.writeBlock(this.time, tr("time"));
        report.tagValuePair(tr("sometimesDuration"), this.sometimesDuration);
        report.tagValuePair(tr("payloadData"), this.payloadData.toString());
    }
}

