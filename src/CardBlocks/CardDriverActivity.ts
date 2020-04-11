

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
import ActivityChangeInfo from 'DataTypes/ActivityChangeInfo';


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

        let newestRecordLength = DataReader.readUint16(this.cyclicData.data, this.newestRecord + 2);  // (cd[cd[2] % cd.length] << 8) + cd[cd[3] % cd.length]
        let endOfNewestRecord = (this.newestRecord + newestRecordLength) % cd.length;

        if (endOfNewestRecord < this.oldestRecord) {
            // console.log(`readCyclicData #1 ${endOfNewestRecord} < ${this.oldestRecord}, newestRecordLength: ${newestRecordLength}, lenth: ${cd.length}`);
            let a1 = cd.slice(this.oldestRecord, this.oldestRecord + cd.length - this.oldestRecord);
            let a2 = cd.slice(0, endOfNewestRecord);

            rv = new Uint8Array(a1.length + a2.length);
            rv.set(a1, 0);
            rv.set(a2, a1.length);                
        } else {
            // console.log(`readCyclicData #2 ${this.oldestRecord}, ${endOfNewestRecord}, ${cd.length}`);
            rv = cd.slice(this.oldestRecord, this.oldestRecord + endOfNewestRecord - this.oldestRecord);
        }

        return rv.buffer;
    }

    printOn(report: Reporter) {
        report.tagValuePair(tr("oldestRecord"), this.oldestRecord);
        report.tagValuePair(tr("newestRecord"), this.newestRecord);
        report.writeArray(this.cardActivityDailyRecords, tr("cardActivityDailyRecords"));

        if (report.allowSvg() && this.cardActivityDailyRecords.numberOfBlocks() > 0) {
            this.printHtmlTimesheet(report);
        }
    }

    printHtmlTimesheet(report: Reporter) {
        let tablehead = "<table><tr><th></th><th>Driving</th><th>Working</th><th>Rest</th><th>Available</th></tr>";
        let durationsMonth: number[] = [0, 0, 0, 0, 0, 0];
        
		let currentMonth = this.cardActivityDailyRecords.get(0).activityRecordDate.date().getMonth();
        let table = new QString("<ul><li>%1:")
            .arg(new QString(tr("Timesheet for %1"))
                .arg(FormatStrings.longMonthName(currentMonth).toString())) + tablehead;

		for (let j = 0; j < this.cardActivityDailyRecords.numberOfBlocks(); j++) {
			if (this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth() != currentMonth) {
				currentMonth = this.cardActivityDailyRecords.get(j).activityRecordDate.date().getMonth();
                table += new QString("<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>")
                    .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.DRIVING])) 
                    .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.WORK]))
                    .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.REST] + durationsMonth[ActivityChangeInfo.SHORTREST]))
                    .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.AVAILABLE]));

				durationsMonth = [0, 0, 0, 0, 0, 0];
                table += new QString("</table></li><li>%1:")
                    .arg(new QString(tr("Timesheet for %1"))
                        .arg(FormatStrings.longMonthName(currentMonth)).toString()) + tablehead;
			}

            let durations: number[] = [0, 0, 0, 0, 0, 0];
			for (let k = 0; k < this.cardActivityDailyRecords.get(j).activityChangeInfos.numberOfBlocks(); k++) {
				durations[this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).activity] += this.cardActivityDailyRecords.get(j).activityChangeInfos.get(k).duration;
			}
            table += new QString("<tr><td>%1</td><td>%2</td><td>%3</td><td>%4</td><td>%5</td></tr>")
                .arg(this.cardActivityDailyRecords.get(j).activityRecordDate.toString())
                .arg(ActivityChangeInfo.formatClock(durations[ActivityChangeInfo.DRIVING]))
                .arg(ActivityChangeInfo.formatClock(durations[ActivityChangeInfo.WORK]))
                .arg(ActivityChangeInfo.formatClock(durations[ActivityChangeInfo.REST] + durations[ActivityChangeInfo.SHORTREST]))
                .arg(ActivityChangeInfo.formatClock(durations[ActivityChangeInfo.AVAILABLE]));

            durations.forEach((d, i) => {
                durationsMonth[i] += d;
            });
		}
        table += new QString("<tr><th>Summary</th><th>%1</th><th>%2</th><th>%3</th><th>%4</th></tr>")
            .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.DRIVING]))
            .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.WORK]))
            .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.REST] + durationsMonth[ActivityChangeInfo.SHORTREST]))
            .arg(ActivityChangeInfo.formatClock(durationsMonth[ActivityChangeInfo.AVAILABLE]));

		table += "</table></li></ul>";
		report.tagValuePair(tr("Timesheet"), table);
    }
}

