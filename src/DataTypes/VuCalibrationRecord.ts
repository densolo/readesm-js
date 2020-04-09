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

import TimeReal from 'DataTypes/TimeReal';
import VehicleRegistration from 'DataTypes/VehicleRegistration';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuCalibrationRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    calibrationPurpose: number;
    workshopName: string;
    workshopAddress: string;
    workshopCardNumber: FullCardNumber;
    workshopCardExpiryDate: TimeReal;
    vehicleIdentificationNumber: string;
    vehicleRegistrationIdentification: VehicleRegistration;
    wVehicleCharacteristicConstant: number;
    kConstantOfRecordingEquipment: number;
    lTyreCircumference: number;
    tyreSize: string;
    authorisedSpeed: number;
    oldOdometerValue: number;
    newOdometerValue: number;
    oldTimeValue: TimeReal;
    newTimeValue: TimeReal;
    nextCalibrationDate: TimeReal;
    static staticSize: number = 167;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.calibrationPurpose = DataReader.readUint8(data, 0);
        this.workshopName = DataReader.readCodePageString(data, 1, 36).toString();
        this.workshopAddress = DataReader.readCodePageString(data, 37, 36).toString();
        this.workshopCardNumber = new FullCardNumber(data.slice(73))
        this.workshopCardExpiryDate = new TimeReal(data.slice(91))
        this.vehicleIdentificationNumber = DataReader.readString(data, 95, 17).toString();
        this.vehicleRegistrationIdentification = new VehicleRegistration(data.slice(112))
        this.wVehicleCharacteristicConstant = DataReader.readUint16(data, 127);
        this.kConstantOfRecordingEquipment = DataReader.readUint16(data, 129);
        this.lTyreCircumference = DataReader.readUint16(data, 131);
        this.tyreSize = DataReader.readString(data, 133, 15).toString();
        this.authorisedSpeed = DataReader.readUint8(data, 148);
        this.oldOdometerValue = DataReader.readUint24(data, 149);
        this.newOdometerValue = DataReader.readUint24(data, 152);
        this.oldTimeValue = new TimeReal(data.slice(155))
        this.newTimeValue = new TimeReal(data.slice(159))
        this.nextCalibrationDate = new TimeReal(data.slice(163))    
    }

    className() {
        return "VuCalibrationRecord";
    }

    title() {
        return "VuCalibrationRecord";
    }

    size() {
        return 167;
    }

    toString() {
		let qs = new QString('VuCalibrationRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("calibrationPurpose"), FormatStrings.calibrationPurpose(this.calibrationPurpose));
        report.tagValuePair(tr("workshopName"), this.workshopName);
        report.tagValuePair(tr("workshopAddress"), this.workshopAddress);
        report.writeBlock(this.workshopCardNumber, tr("workshopCardNumber"));
        report.writeBlock(this.workshopCardExpiryDate, tr("workshopCardExpiryDate"));
        report.tagValuePair(tr("vehicleIdentificationNumber"), this.vehicleIdentificationNumber);
        report.writeBlock(this.vehicleRegistrationIdentification, tr("vehicleRegistrationIdentification"));
        report.tagValuePair(tr("wVehicleCharacteristicConstant"), this.wVehicleCharacteristicConstant);
        report.tagValuePair(tr("kConstantOfRecordingEquipment"), this.kConstantOfRecordingEquipment);
        report.tagValuePair(tr("lTyreCircumference"), this.lTyreCircumference);
        report.tagValuePair(tr("tyreSize"), this.tyreSize);
        report.tagValuePair(tr("authorisedSpeed"), this.authorisedSpeed);
        report.tagValuePair(tr("oldOdometerValue"), this.oldOdometerValue);
        report.tagValuePair(tr("newOdometerValue"), this.newOdometerValue);
        report.writeBlock(this.oldTimeValue, tr("oldTimeValue"));
        report.writeBlock(this.newTimeValue, tr("newTimeValue"));
        report.writeBlock(this.nextCalibrationDate, tr("nextCalibrationDate"));
    }
}

