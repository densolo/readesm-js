
import DataType from 'DataTypes/DataType';
import QString from 'utils/QString';
import {tr} from 'utils/Translation';


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

    formatClock(time: number) {
        return new QString("%1:%2")
                .arg(time / 60)
                .arg(time % 60).toString();
    }

    title() {
        return new QString(tr("%1 for %2 h"))
            .arg(this.activityName())
            .arg(this.formatClock(this.duration)).toString(); 
    }
}