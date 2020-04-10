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

import CardSlots from 'DataTypes/CardSlots';
import Timespan from 'DataTypes/Timespan';


export default class VuEventRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    eventType: number;
    eventRecordPurpose: number;
    eventTime: Timespan;
    cardSlots: CardSlots;
    similarEventsNumber: number;
    static staticSize: number = 83;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.eventType = DataReader.readUint8(data, 0);
        this.eventRecordPurpose = DataReader.readUint8(data, 1);
        this.eventTime = new Timespan(data.slice(2))
        this.cardSlots = new CardSlots(data.slice(10))
        this.similarEventsNumber = DataReader.readUint8(data, 82);    
    }

    className() {
        return "VuEventRecord";
    }

    title() {
        return "";
    }

    size() {
        return 83;
    }

    toString() {
		let qs = new QString('VuEventRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("eventType"), FormatStrings.eventType(this.eventType));
        report.tagValuePair(tr("eventRecordPurpose"), FormatStrings.eventRecordPurpose(this.eventRecordPurpose));
        report.writeBlock(this.eventTime, tr("eventTime"));
        report.writeBlock(this.cardSlots, tr("cardSlots"));
        report.tagValuePair(tr("similarEventsNumber"), this.similarEventsNumber);
    }
}

