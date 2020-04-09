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

import ExtendedSerialNumber from 'DataTypes/ExtendedSerialNumber';


export default class CardIccIdentification extends CardBlock {

    static BLOCK_TYPE = 0x0002;
    

    clockStop: number;
    cardExtendedSerialNumber: ExtendedSerialNumber;
    cardApprovalNumber: RawData;
    cardPersonaliserID: RawData;
    embedderIcAssemblerId: RawData;
    icIdentifier: RawData;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.clockStop = DataReader.readUint8(data, 5);
        this.cardExtendedSerialNumber = new ExtendedSerialNumber(data.slice(6))
        this.cardApprovalNumber = DataReader.readRawData(data, 14, 8);
        this.cardPersonaliserID = DataReader.readRawData(data, 22, 1);
        this.embedderIcAssemblerId = DataReader.readRawData(data, 23, 5);
        this.icIdentifier = DataReader.readRawData(data, 28, 2);    
    }

    className() {
        return "CardIccIdentification";
    }

    title() {
        return "Card ICC identification";
    }



    toString() {
		let qs = new QString('CardIccIdentification');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("clockStop"), this.clockStop);
        report.writeBlock(this.cardExtendedSerialNumber, tr("cardExtendedSerialNumber"));
        report.tagValuePair(tr("cardApprovalNumber"), this.cardApprovalNumber.toString());
        report.tagValuePair(tr("cardPersonaliserID"), this.cardPersonaliserID.toString());
        report.tagValuePair(tr("embedderIcAssemblerId"), this.embedderIcAssemblerId.toString());
        report.tagValuePair(tr("icIdentifier"), this.icIdentifier.toString());
        if (this.size() != 30 ) {
            report.tagValuePair("should have", 30 );
            report.tagValuePair("has", this.size());
        }
    }
}

