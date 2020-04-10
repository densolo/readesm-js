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

import ActivityChangeInfo from 'DataTypes/ActivityChangeInfo';
import VuPlaceDailyWorkPeriodRecord from 'DataTypes/VuPlaceDailyWorkPeriodRecord';
import VuCardIWRecord from 'DataTypes/VuCardIWRecord';
import TimeReal from 'DataTypes/TimeReal';
import SpecificConditionRecord from 'DataTypes/SpecificConditionRecord';


export default class RawVuActivities extends VuBlock {

    static BLOCK_TYPE = 0x2;
    

    timeReal: TimeReal;
    odometerValueMidnight: number;
    vuCardIWRecord: Subblocks<VuCardIWRecord>;
    activityChangeInfo: Subblocks<ActivityChangeInfo>;
    vuPlaceDailyWorkPeriodRecord: Subblocks<VuPlaceDailyWorkPeriodRecord>;
    specificConditionRecord: Subblocks<SpecificConditionRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.timeReal = new TimeReal(data.slice(0))
        this.odometerValueMidnight = DataReader.readUint24(data, 4);
        this.vuCardIWRecord = DataReader.readSubblocksByCount<VuCardIWRecord>(VuCardIWRecord, data.slice(7 + 2), 0, (DataReader.readUint16(data, 7)));
        this.activityChangeInfo = DataReader.readSubblocksByCount<ActivityChangeInfo>(ActivityChangeInfo, data.slice(9 + 2), 0, (DataReader.readUint16(data, 9)));
        this.vuPlaceDailyWorkPeriodRecord = DataReader.readSubblocksByCount<VuPlaceDailyWorkPeriodRecord>(VuPlaceDailyWorkPeriodRecord, data.slice(11 + 1), 0, (DataReader.readUint8(data, 11)));
        this.specificConditionRecord = DataReader.readSubblocksByCount<SpecificConditionRecord>(SpecificConditionRecord, data.slice(12 + 2), 0, (DataReader.readUint16(data, 12)));    
    }

    className() {
        return "RawVuActivities";
    }

    title() {
        return new QString(tr("Activities on %1")).arg(this.timeReal.toString()).toString();
    }

    size() {
        return 14;
    }

    toString() {
		let qs = new QString('VuActivities');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.timeReal, tr("timeReal"));
        report.tagValuePair(tr("odometerValueMidnight"), this.odometerValueMidnight);
        report.writeArray(this.vuCardIWRecord, tr("vuCardIWRecord"));
        report.writeArray(this.activityChangeInfo, tr("activityChangeInfo"));
        report.writeArray(this.vuPlaceDailyWorkPeriodRecord, tr("vuPlaceDailyWorkPeriodRecord"));
        report.writeArray(this.specificConditionRecord, tr("specificConditionRecord"));
    }
}

