// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class


import DataReader from 'utils/DataReader';
import QString from 'utils/QString';
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
import Subblocks from "../DataTypes/Subblocks";


export default class VuOverview extends VuBlock {

    static BLOCK_TYPE = 0x1;
    static START_OF_BLOCKS = 493;
    static SIGNATURE_TREP1 = 128;

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


        this.memberStateCertificate = new EncryptedCertificate(data.slice(2))
        this.vuCertificate = new EncryptedCertificate(data.slice(196))
        this.vehicleIdentificationNumber = DataReader.readString(data, 390, 17).toString();
        this.vehicleRegistrationIdentification = new VehicleRegistration(data.slice(407))
        this.currentDateTime = new TimeReal(data.slice(422))
        this.vuDownloadablePeriod = new Timespan(data.slice(426))
        this.CardSlotsStatus = DataReader.readUint8(data, 434);
        this.downloadingTime = new TimeReal(data.slice(435))
        this.cardNumber = new FullCardNumber(data.slice(439))
        this.companyOrWorkshopName = DataReader.readCodePageString(data, 457, 36).toString();
        let pos = VuOverview.START_OF_BLOCKS
        this.vuCompanyLocksRecord = DataReader.readSubblocksByCount<VuCompanyLocksRecord>(VuCompanyLocksRecord, data.slice(pos + 1), 0, (DataReader.readUint8(data, pos)));
        pos += this.vuCompanyLocksRecord.size() + 1
        this.vuControlActivityRecord = DataReader.readSubblocksByCount<VuControlActivityRecord>(VuControlActivityRecord, data.slice(pos + 1), 0, (DataReader.readUint8(data, pos)));
    }

    className() {
        return "VuOverview";
    }

    title() {
        return "Overview";
    }


    size() {
        return VuOverview.START_OF_BLOCKS +
            this.vuCompanyLocksRecord.size() + this.vuControlActivityRecord.size() + 2 + VuOverview.SIGNATURE_TREP1
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
    }
}

