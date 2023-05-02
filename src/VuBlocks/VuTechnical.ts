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
import VuCalibrationRecord from 'DataTypes/VuCalibrationRecord';
import ExtendedSerialNumber from 'DataTypes/ExtendedSerialNumber';


export default class VuTechnical extends VuBlock {

    static BLOCK_TYPE = 0x5;


    vuManufacturerName: string;
    vuManufacturerAddress: string;
    vuPartNumber: string;
    vuSerialNumber: ExtendedSerialNumber;
    vuSoftwareVersion: string;
    vuSoftInstallationDate: TimeReal;
    vuManufacturingDate: TimeReal;
    vuApprovalNumber: string;
    sensorSerialNumber: ExtendedSerialNumber;
    sensorApprovalNumber: string;
    sensorPairingDateFirst: TimeReal;
    vuCalibrationRecord: Subblocks<VuCalibrationRecord>;

    constructor(data: ArrayBuffer) {
        super(data);

        this.vuManufacturerName = DataReader.readCodePageString(data, 2, 36).toString();
        this.vuManufacturerAddress = DataReader.readCodePageString(data, 38, 36).toString();
        this.vuPartNumber = DataReader.readString(data, 74, 16).toString();
        this.vuSerialNumber = new ExtendedSerialNumber(data.slice(90));
        this.vuSoftwareVersion = DataReader.readString(data, 98, 4).toString();
        this.vuSoftInstallationDate = new TimeReal(data.slice(102));
        this.vuManufacturingDate = new TimeReal(data.slice(106));
        this.vuApprovalNumber = DataReader.readString(data, 110, 8).toString();
        this.sensorSerialNumber = new ExtendedSerialNumber(data.slice(118));
        this.sensorApprovalNumber = DataReader.readString(data, 126, 8).toString();
        this.sensorPairingDateFirst = new TimeReal(data.slice(134));
        this.vuCalibrationRecord = DataReader.readSubblocksByCount<VuCalibrationRecord>(VuCalibrationRecord, data.slice(138 + 1), 0, (DataReader.readUint8(data, 138)));
    }

    className() {
        return "VuTechnical";
    }

    title() {
        return "Technical Data";
    }

    size() {
        return 267 + this.vuCalibrationRecord.size();
    }

    toString() {
		let qs = new QString('VuTechnical');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("vuManufacturerName"), this.vuManufacturerName);
        report.tagValuePair(tr("vuManufacturerAddress"), this.vuManufacturerAddress);
        report.tagValuePair(tr("vuPartNumber"), this.vuPartNumber);
        report.writeBlock(this.vuSerialNumber, tr("vuSerialNumber"));
        report.tagValuePair(tr("vuSoftwareVersion"), this.vuSoftwareVersion);
        report.tagValuePair(tr("vuSoftInstallationDate"), this.vuSoftInstallationDate.toString());
        report.tagValuePair(tr("vuManufacturingDate"), this.vuManufacturingDate.toString());
        report.tagValuePair(tr("vuApprovalNumber"), this.vuApprovalNumber);
        report.writeBlock(this.sensorSerialNumber, tr("sensorSerialNumber"));
        report.tagValuePair(tr("sensorApprovalNumber"), this.sensorApprovalNumber);
        report.tagValuePair(tr("sensorPairingDateFirst"), this.sensorPairingDateFirst.toString());
        report.writeArray(this.vuCalibrationRecord, tr("vuCalibrationRecord"));
    }
}

