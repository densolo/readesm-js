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

import Timespan from 'DataTypes/Timespan';
import VehicleRegistration from 'DataTypes/VehicleRegistration';
import FullCardNumber from 'DataTypes/FullCardNumber';
import VuControlActivityRecord from 'DataTypes/VuControlActivityRecord';
import VuCompanyLocksRecord from 'DataTypes/VuCompanyLocksRecord';
import TimeReal from 'DataTypes/TimeReal';
import EncryptedCertificate from 'DataTypes/EncryptedCertificate';


export default class RawVuOverview extends VuBlock {

    static BLOCK_TYPE = 0x1;
    

    memberStateCertificate: EncryptedCertificate;
    vuCertificate: EncryptedCertificate;
    vehicleIdentificationNumber: string;
    vehicleRegistrationIdentification: VehicleRegistration;
    currentDateTime: TimeReal;
    vuDownloadablePeriod: Timespan;
    CardSlotsStatus: number;
    downloadingTime: TimeReal;
    cardNumber: FullCardNumber;
    companyOrWorkshopName: string;
    vuCompanyLocksRecord: Subblocks<VuCompanyLocksRecord>;
    vuControlActivityRecord: Subblocks<VuControlActivityRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.memberStateCertificate = new EncryptedCertificate(data.slice(0))
        this.vuCertificate = new EncryptedCertificate(data.slice(194))
        this.vehicleIdentificationNumber = DataReader.readString(data, 388, 17).toString();
        this.vehicleRegistrationIdentification = new VehicleRegistration(data.slice(405))
        this.currentDateTime = new TimeReal(data.slice(420))
        this.vuDownloadablePeriod = new Timespan(data.slice(424))
        this.CardSlotsStatus = DataReader.readUint8(data, 432);
        this.downloadingTime = new TimeReal(data.slice(433))
        this.cardNumber = new FullCardNumber(data.slice(437))
        this.companyOrWorkshopName = DataReader.readCodePageString(data, 455, 36).toString();
        this.vuCompanyLocksRecord = DataReader.readSubblocksByCount<VuCompanyLocksRecord>(VuCompanyLocksRecord, data.slice(491 + 1), 0, (DataReader.readUint8(data, 491)));
        this.vuControlActivityRecord = DataReader.readSubblocksByCount<VuControlActivityRecord>(VuControlActivityRecord, data.slice(492 + 1), 0, (DataReader.readUint8(data, 492)));    
    }

    className() {
        return "RawVuOverview";
    }

    title() {
        return "Overview";
    }

    size() {
        return 493;
    }

    toString() {
		let qs = new QString('VuOverview');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.memberStateCertificate, tr("memberStateCertificate"));
        report.writeBlock(this.vuCertificate, tr("vuCertificate"));
        report.tagValuePair(tr("vehicleIdentificationNumber"), this.vehicleIdentificationNumber);
        report.writeBlock(this.vehicleRegistrationIdentification, tr("vehicleRegistrationIdentification"));
        report.writeBlock(this.currentDateTime, tr("currentDateTime"));
        report.writeBlock(this.vuDownloadablePeriod, tr("vuDownloadablePeriod"));
        report.tagValuePair(tr("CardSlotsStatus"), this.CardSlotsStatus);
        report.writeBlock(this.downloadingTime, tr("downloadingTime"));
        report.writeBlock(this.cardNumber, tr("cardNumber"));
        report.tagValuePair(tr("companyOrWorkshopName"), this.companyOrWorkshopName);
        report.writeArray(this.vuCompanyLocksRecord, tr("vuCompanyLocksRecord"));
        report.writeArray(this.vuControlActivityRecord, tr("vuControlActivityRecord"));
    }
}

