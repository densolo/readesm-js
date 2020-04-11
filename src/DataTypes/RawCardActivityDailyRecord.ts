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


export default class RawCardActivityDailyRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    activityRecordPreviousLength: number;
    activityRecordLength: number;
    activityRecordDate: TimeReal;
    activityPresenceCounter: number;
    activityDayDistance: number;
    static staticSize: number = 12;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.activityRecordPreviousLength = DataReader.readUint16(data, 0);
        this.activityRecordLength = DataReader.readUint16(data, 2);
        this.activityRecordDate = new TimeReal(data.slice(4))
        this.activityPresenceCounter = DataReader.readBCD16(data, 8);
        this.activityDayDistance = DataReader.readUint16(data, 10);    
    }

    className() {
        return "RawCardActivityDailyRecord";
    }

    title() {
        return new QString(tr("Activities on %1")).arg(this.activityRecordDate.toString()).toString();
    }

    size() {
        return 12;
    }

    toString() {
		let qs = new QString('CardActivityDailyRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("activityRecordPreviousLength"), new QString("%1 Bytes").arg(this.activityRecordPreviousLength).toString());
        report.tagValuePair(tr("activityRecordLength"), new QString("%1 Bytes").arg(this.activityRecordLength).toString());
        report.writeBlock(this.activityRecordDate, tr("activityRecordDate"));
        report.tagValuePair(tr("activityPresenceCounter"), this.activityPresenceCounter);
        report.tagValuePair(tr("activityDayDistance"), new QString("%1 km").arg(this.activityDayDistance).toString());
    }
}

