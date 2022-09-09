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

import ActivityChangeInfo from 'DataTypes/ActivityChangeInfo';
import VuPlaceDailyWorkPeriodRecord from 'DataTypes/VuPlaceDailyWorkPeriodRecord';
import VuCardIWRecord from 'DataTypes/VuCardIWRecord';
import TimeReal from 'DataTypes/TimeReal';
import SpecificConditionRecord from 'DataTypes/SpecificConditionRecord';


export default class VuActivities extends VuBlock {

    static BLOCK_TYPE = 0x2;


    timeReal: TimeReal;
    odometerValueMidnight: number;
    vuCardIWRecord: VuCardIWRecord[];
    activityChangeInfo: ActivityChangeInfo[];
    vuPlaceDailyWorkPeriodRecord: VuPlaceDailyWorkPeriodRecord[];
    specificConditionRecord: SpecificConditionRecord[];

    constructor(data: ArrayBuffer) {
        super(data);


        this.timeReal = new TimeReal(data.slice(2))
        this.odometerValueMidnight = DataReader.readUint24(data, 6);
    }

    className() {
        return "VuActivities";
    }

    title() {
        return "Activity";
    }


    size() {
        return 144;
    }


    toString() {
		let qs = new QString('VuActivities');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.timeReal, tr("timeReal"));
        report.tagValuePair(tr("odometerValueMidnight"), this.odometerValueMidnight);
    }
}

