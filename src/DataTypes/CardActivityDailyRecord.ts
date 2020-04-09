
import * as padStart from 'lodash/padStart';
import Block from 'DataTypes/Block';
import Subblocks from 'DataTypes/Subblocks';
import DataReader from 'utils/DataReader';
import Converter from 'utils/Converter';
import QString from 'utils/QString';
import RawData from 'DataTypes/RawData';
import ActivityChangeInfo from 'DataTypes/ActivityChangeInfo';
import CardBlock from 'CardBlocks/CardBlock';
import VuBlock from 'VuBlocks/VuBlock';
import DataType from 'DataTypes/DataType';
import FormatStrings from 'utils/FormatStrings';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';

import TimeReal from 'DataTypes/TimeReal';
import RawCardActivityDailyRecord from 'DataTypes/RawCardActivityDailyRecord';


export default class CardActivityDailyRecord extends RawCardActivityDailyRecord {

    activityChangeInfos: Subblocks<ActivityChangeInfo>;

    constructor(data: ArrayBuffer) {
        super(data);

        this.activityChangeInfos = DataReader.readSubblocksByLength<ActivityChangeInfo>(ActivityChangeInfo, data, 
            RawCardActivityDailyRecord.staticSize, this.activityRecordLength - RawCardActivityDailyRecord.staticSize);

        if (this.activityChangeInfos.numberOfBlocks() > 0) {
            for (let j = 0; j < this.activityChangeInfos.numberOfBlocks() - 1; ++j) {
                if (this.activityChangeInfos.get(j + 1).t != 0) {
                    this.activityChangeInfos.get(j).setDuration(this.activityChangeInfos.get(j + 1).t - this.activityChangeInfos.get(j).t, false);
                } else {
                    this.activityChangeInfos.get(j).setDuration(60*24 - this.activityChangeInfos.get(j).t, false);
                }
            }
            this.activityChangeInfos.get(this.activityChangeInfos.numberOfBlocks() - 1).setDuration(60 * 24 - this.activityChangeInfos.get(this.activityChangeInfos.numberOfBlocks() - 1).t, false);
        }
    }

    title() {
        return new QString(tr("Activities on %1"))
            .arg(this.activityRecordDate.toString()).toString();
    }

    size() {
        if (this.activityRecordLength < RawCardActivityDailyRecord.staticSize) {
            console.log("Size too small in CardActivityDailyRecord");
            return RawCardActivityDailyRecord.staticSize;
        }
        if (this.activityRecordLength > RawCardActivityDailyRecord.staticSize + 2 * 60 * 24) {
            console.log("Size of CardActivityDailyRecord excessive: " + this.activityRecordLength);
        }
        return this.activityRecordLength;
    }

    printOn(report: Reporter) {
        super.printOn(report);

        if (report.allowSvg()) {
            // TODO: code from CardActivityDailyRecord.cpp
        }
        
        report.writeArray(this.activityChangeInfos, tr("activityChangeInfos"), false);
    }
}

