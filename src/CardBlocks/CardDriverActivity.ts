

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
import RawCardDriverActivity from 'CardBlocks/RawCardDriverActivity';
import Subblocks from 'DataTypes/Subblocks';
import CardActivityDailyRecord from 'DataTypes/CardActivityDailyRecord';


export default class CardDriverActivity extends RawCardDriverActivity {

    activityDataUncycled: ArrayBuffer;
    cardActivityDailyRecords: Subblocks<CardActivityDailyRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.activityDataUncycled = this.readCyclicData();
        this.cardActivityDailyRecords = DataReader.readSubblocksByLength<CardActivityDailyRecord>(
            CardActivityDailyRecord, this.activityDataUncycled, 0, this.activityDataUncycled.byteLength
        )
    }

    readCyclicData(): ArrayBuffer {
        let rv: Uint8Array;
        let cd = this.cyclicData.toUint8Array();

        let newestRecordLength = DataReader.readUint16(this.cyclicData.data, 1);  // (cd[cd[2] % cd.length] << 8) + cd[cd[3] % cd.length]
        let endOfNewestRecord = (cd[0] + newestRecordLength) % cd.length;

        if (endOfNewestRecord < this.oldestRecord) {
            let a1 = cd.slice(this.oldestRecord, cd.length - this.oldestRecord);
            let a2 = cd.slice(0, this.oldestRecord);

            rv = new Uint8Array(a1.length + a2.length);
            rv.set(a1, 0);
            rv.set(a2, a1.length);                
        } else {
            rv = cd.slice(this.oldestRecord, endOfNewestRecord - this.oldestRecord);
        }

        return rv.buffer;
    }

    printOn(report: Reporter) {
        report.tagValuePair(tr("oldestRecord"), this.oldestRecord);
        report.tagValuePair(tr("newestRecord"), this.newestRecord);
        report.writeArray(this.cardActivityDailyRecords, tr("cardActivityDailyRecords"));

        // TODO: add more code from CardDriverActivity.cpp
    }
}

