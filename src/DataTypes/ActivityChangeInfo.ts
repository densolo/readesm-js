
import * as padStart from 'lodash/padStart';
import DataType from 'DataTypes/DataType';
import QString from 'utils/QString';
import {tr} from 'utils/Translation';
import Reporter from 'Reporter/Reporter';


export default class ActivityChangeInfo extends DataType {

    s: number;
    c: number;
    p: number;
    a: number;
    t: number;
    
    duration: number;
	activity: number;
    isSlotState: boolean;
    
	static REST = 0;
	static AVAILABLE = 1;
	static WORK = 2;
	static DRIVING = 3;
	static UNKNOWN = 4;
    static SHORTREST = 5;
    
    static staticSize: number = 2;

    constructor(data: ArrayBuffer) {
        super(data);

        let start = new Uint8Array(data);

        this.s = (start[0] & (1 << 7)) >> 7;
        this.c = (start[0] & (1 << 6)) >> 6;
        this.p = (start[0] & (1 << 5)) >> 5;
        this.a = (start[0] & ((1 << 4) | (1 << 3))) >> 3;
        this.t = Number((start[0] & 7) << 8) + start[1];

        this.duration = 0;
        this.activity = this.a;
    }

    setDuration(newDuration: number, newIsSlotState: boolean) {
        this.duration = newDuration;
        this.isSlotState = newIsSlotState;
        if (this.a == 0 && this.duration < 15) {
            this.activity = ActivityChangeInfo.SHORTREST;
        }
        if (!this.isSlotState && (this.p != 0) && (this.c == 0)) {
            this.activity = ActivityChangeInfo.UNKNOWN;
        }
    }

    heightHint() {
        switch (this.activity) {
            case ActivityChangeInfo.REST: return 0.3;
            case ActivityChangeInfo.AVAILABLE: return 0.15;
            case ActivityChangeInfo.WORK: return 0.7;
            case ActivityChangeInfo.DRIVING: return 1.0;
            case ActivityChangeInfo.UNKNOWN: return 0.2;
            case ActivityChangeInfo.SHORTREST: return 0.4;
        }
        return 0.5;
    }

    className() {
        return "ActivityChangeInfo";
    }

    size() {
        return 2;
    }
    
    isDefaultValue() {
        return false;
    }
    
    activityName() {
        switch (this.activity) {
            case ActivityChangeInfo.REST: {
                return tr("break/rest");
            }
            case ActivityChangeInfo.AVAILABLE: {
                return tr("availability");
            }
            case ActivityChangeInfo.WORK: {
                return tr("work");
            }
            case ActivityChangeInfo.DRIVING: {
                return tr("driving");
            }
            case ActivityChangeInfo.UNKNOWN: {
                return tr("unknown");
            }
            case ActivityChangeInfo.SHORTREST: {
                return tr("short break");
            }
        }
        return tr("unknown activity");
    }

    color() {
        switch (this.activity) {
            case ActivityChangeInfo.REST: return "red";
            case ActivityChangeInfo.AVAILABLE: return "black";
            case ActivityChangeInfo.WORK: return "yellow";
            case ActivityChangeInfo.DRIVING: return "green";
            case ActivityChangeInfo.UNKNOWN: return "purple";
            case ActivityChangeInfo.SHORTREST: return "orange";
        }
        return "blue";
    }

    static formatClock(time: number) {
        return new QString("%1:%2")
                .arg(padStart(Math.floor(time / 60), 2, '0'))
                .arg(padStart(time % 60, 2, '0')).toString();
    }

    timespan() {
        return new QString(tr("from %1 to %2 (%3 h)"))
            .arg(ActivityChangeInfo.formatClock(this.t))
            .arg(ActivityChangeInfo.formatClock(this.t + this.duration))
            .arg(ActivityChangeInfo.formatClock(this.duration))
            .toString();
    }

    extraString() {
        let rv = '';
        if (this.isSlotState) {
            rv += (this.p == 0 ? tr("Card inserted") : tr("Card not inserted or withdrawn")) + ", ";
            rv += (this.s == 0 ? tr("driver slot") : tr("co-driver slot")) + ", ";
            rv += (this.c == 0 ? tr("single") : tr("crew"));
        } else {
            if (this.p == 0) {
                rv += tr("Card inserted") + ", ";
                rv += (this.s == 0 ? tr("driver slot") : tr("co-driver slot")) + ", ";
                rv += (this.c == 0 ? tr("single") : tr("crew"));
            } else {
                rv += tr("Card not inserted or withdrawn") + ", ";
                rv += (this.s == 0 ? tr("driver slot") : tr("co-driver slot")) + ", ";
                rv += (this.c == 0 ? tr("following activity unknown") : tr("following activity manually entered"));
            }
        }
        return rv;
    }

    title() {
        return new QString(tr("%1 for %2 h"))
            .arg(this.activityName())
            .arg(ActivityChangeInfo.formatClock(this.duration)).toString(); 
    }

    printOn(report: Reporter) {
        report.tagValuePair(tr("activity"), this.activityName());
        report.tagValuePair(tr("time"), this.timespan());
        report.tagValuePair(tr("duration"), ActivityChangeInfo.formatClock(this.duration));
        report.tagValuePair(tr("slot status"), this.extraString());
        report.tagValuePair(tr("Raw data"), new QString("s=%1, c=%2, p=%3, a=%4, t=%5")
            .arg(this.s)
            .arg(this.c)
            .arg(this.p)
            .arg(this.a)
            .arg(this.t).toString());
    }
}