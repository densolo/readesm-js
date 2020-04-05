
import BcdMonthYear from 'DataTypes/BcdMonthYear';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';


export default class ExtendedSerialNumber extends Block {
    
    serialNumber: number;
	date: BcdMonthYear;
	equipmentType: number;
    manufacturerCode: number;
    
    constructor(data: ArrayBuffer) {
        super();
        
        this.serialNumber = DataReader.readInt32(data, 0);
        this.date = new BcdMonthYear(data.slice(4));
        this.equipmentType = DataReader.readInt8(data, 6);
        this.manufacturerCode = DataReader.readInt8(data, 7);
    }

    size() {
        return 8;
    }
}