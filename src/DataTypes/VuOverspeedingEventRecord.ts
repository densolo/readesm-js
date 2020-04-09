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


export default class VuOverspeedingEventRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    eventType: number;
    eventRecordPurpose: number;
    eventTime: Timespan;
    maxSpeedValue: number;
    averageSpeedValue: number;
    cardNumberDriverSlotBegin: FullCardNumber;
    similarEventsNumber: number;
    static staticSize: number = 31;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.eventType = DataReader.readUint8(data, 0);
        this.eventRecordPurpose = DataReader.readUint8(data, 1);
        this.eventTime = new Timespan(data.slice(2))
        this.maxSpeedValue = DataReader.readUint8(data, 10);
        this.averageSpeedValue = DataReader.readUint8(data, 11);
        this.cardNumberDriverSlotBegin = new FullCardNumber(data.slice(12))
        this.similarEventsNumber = DataReader.readUint8(data, 30);    
    }

    className() {
        return "VuOverspeedingEventRecord";
    }

    title() {
        return "";
    }

    size() {
        return 31;
    }

    toString() {
		let qs = new QString('VuOverspeedingEventRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("eventType"), FormatStrings.eventType(this.eventType));
        report.tagValuePair(tr("eventRecordPurpose"), FormatStrings.eventRecordPurpose(this.eventRecordPurpose));
        report.writeBlock(this.eventTime, tr("eventTime"));
        report.tagValuePair(tr("maxSpeedValue"), this.maxSpeedValue);
        report.tagValuePair(tr("averageSpeedValue"), this.averageSpeedValue);
        report.writeBlock(this.cardNumberDriverSlotBegin, tr("cardNumberDriverSlotBegin"));
        report.tagValuePair(tr("similarEventsNumber"), this.similarEventsNumber);
    }
}

