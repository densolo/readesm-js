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

import TimeReal from 'DataTypes/TimeReal';
import Name from 'DataTypes/Name';
import VehicleRegistration from 'DataTypes/VehicleRegistration';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuCardIWRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    cardHolderName: Name;
    cardNumber: FullCardNumber;
    cardExpiryDate: TimeReal;
    cardInsertionTime: TimeReal;
    vehicleOdometerValueAtInsertion: number;
    cardSlotNumber: number;
    cardWithdrawalTime: TimeReal;
    vehicleOdometerValueAtWithdrawal: number;
    previousVehicleRegistration: VehicleRegistration;
    previousCardWithdrawalTime: TimeReal;
    manualInputFlag: number;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardHolderName = new Name(data.slice(0))
        this.cardNumber = new FullCardNumber(data.slice(72))
        this.cardExpiryDate = new TimeReal(data.slice(90))
        this.cardInsertionTime = new TimeReal(data.slice(94))
        this.vehicleOdometerValueAtInsertion = DataReader.readUint24(data, 98);
        this.cardSlotNumber = DataReader.readUint8(data, 101);
        this.cardWithdrawalTime = new TimeReal(data.slice(102))
        this.vehicleOdometerValueAtWithdrawal = DataReader.readUint24(data, 106);
        this.previousVehicleRegistration = new VehicleRegistration(data.slice(109))
        this.previousCardWithdrawalTime = new TimeReal(data.slice(124))
        this.manualInputFlag = DataReader.readUint8(data, 128);    
    }

    className() {
        return "VuCardIWRecord";
    }

    title() {
        return "";
    }

    
    size() {
        return 129;
    }


    toString() {
		let qs = new QString('VuCardIWRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.cardHolderName, tr("cardHolderName"));
        report.writeBlock(this.cardNumber, tr("cardNumber"));
        report.writeBlock(this.cardExpiryDate, tr("cardExpiryDate"));
        report.writeBlock(this.cardInsertionTime, tr("cardInsertionTime"));
        report.tagValuePair(tr("vehicleOdometerValueAtInsertion"), this.vehicleOdometerValueAtInsertion);
        report.tagValuePair(tr("cardSlotNumber"), this.cardSlotNumber);
        report.writeBlock(this.cardWithdrawalTime, tr("cardWithdrawalTime"));
        report.tagValuePair(tr("vehicleOdometerValueAtWithdrawal"), this.vehicleOdometerValueAtWithdrawal);
        report.writeBlock(this.previousVehicleRegistration, tr("previousVehicleRegistration"));
        report.writeBlock(this.previousCardWithdrawalTime, tr("previousCardWithdrawalTime"));
        report.tagValuePair(tr("manualInputFlag"), this.manualInputFlag);
    }
}

