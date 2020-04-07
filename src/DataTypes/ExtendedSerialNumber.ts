
import BcdMonthYear from 'DataTypes/BcdMonthYear';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import QString from 'utils/QString';
import FormatStrings from 'utils/FormatStrings';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';


export default class ExtendedSerialNumber extends Block {
    
    serialNumber: number;
	date: BcdMonthYear;
	equipmentType: number;
    manufacturerCode: number;
    
    constructor(data: ArrayBuffer) {
        super();

        this.serialNumber = DataReader.readUint32(data, 0);
        this.date = new BcdMonthYear(data.slice(4));
        this.equipmentType = DataReader.readUint8(data, 6);
        this.manufacturerCode = DataReader.readUint8(data, 7);
    }

    className() {
        return "ExtendedSerialNumber";
    }

    size() {
        return 8;
    }

    toString() {
        return new QString("%1 (%2) %3, %4")
            .arg(this.serialNumber)
            .arg(this.date.toString())
            .arg(FormatStrings.equipmentType(this.equipmentType))
            .arg(FormatStrings.manufacturerCode(this.manufacturerCode))
            .toString();
    }

    printOn(report: Reporter) {
        report.tagValuePair(tr("serialNumber"), this.serialNumber);
        report.writeBlock(this.date, tr("date"));
        report.tagValuePair(tr("equipmentType"), FormatStrings.equipmentType(this.equipmentType));
        report.tagValuePair(tr("manufacturerCode"), FormatStrings.manufacturerCode(this.manufacturerCode));
    }
}
