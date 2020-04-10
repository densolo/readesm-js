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



export default class CardDrivingLicenseInformation extends CardBlock {

    static BLOCK_TYPE = 0x0521;
    

    drivingLicenseIssuingAuthorithy: string;
    drivingLicenseIssuingNation: number;
    drivingLicenseNumber: string;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.drivingLicenseIssuingAuthorithy = DataReader.readCodePageString(data, 5, 36).toString();
        this.drivingLicenseIssuingNation = DataReader.readUint8(data, 41);
        this.drivingLicenseNumber = DataReader.readString(data, 42, 16).toString();    
    }

    className() {
        return "CardDrivingLicenseInformation";
    }

    title() {
        return "Driving License Info";
    }



    toString() {
		let qs = new QString('CardDrivingLicenseInformation');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("drivingLicenseIssuingAuthorithy"), this.drivingLicenseIssuingAuthorithy);
        report.tagValuePair(tr("drivingLicenseIssuingNation"), FormatStrings.nationNumeric(this.drivingLicenseIssuingNation));
        report.tagValuePair(tr("drivingLicenseNumber"), this.drivingLicenseNumber);
        if (this.dataBlockSize() != 58 ) {
            report.tagValuePair("should have", 58 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

