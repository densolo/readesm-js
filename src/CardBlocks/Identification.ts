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
import Name from 'DataTypes/Name';
import BcdDate from 'DataTypes/BcdDate';


export default class Identification extends CardBlock {

    static BLOCK_TYPE = 0x0520;
    

    cardIssuingMemberState: number;
    cardNumber: string;
    cardIssuingAuthorityName: string;
    cardIssueDate: TimeReal;
    cardValidityBegin: TimeReal;
    cardExpiryDate: TimeReal;
    cardHolderName: Name;
    cardHolderBirthDate: BcdDate;
    cardHolderPreferredLanguage: string;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardIssuingMemberState = DataReader.readUint8(data, 5);
        this.cardNumber = DataReader.readString(data, 6, 16).toString();
        this.cardIssuingAuthorityName = DataReader.readCodePageString(data, 22, 36).toString();
        this.cardIssueDate = new TimeReal(data.slice(58))
        this.cardValidityBegin = new TimeReal(data.slice(62))
        this.cardExpiryDate = new TimeReal(data.slice(66))
        this.cardHolderName = new Name(data.slice(70))
        this.cardHolderBirthDate = new BcdDate(data.slice(142))
        this.cardHolderPreferredLanguage = DataReader.readString(data, 146, 2).toString();    
    }

    className() {
        return "Identification";
    }

    title() {
        return "Card identification and card holder identification";
    }



    toString() {
		let qs = new QString('Identification');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("cardIssuingMemberState"), FormatStrings.nationNumeric(this.cardIssuingMemberState));
        report.tagValuePair(tr("cardNumber"), this.cardNumber);
        report.tagValuePair(tr("cardIssuingAuthorityName"), this.cardIssuingAuthorityName);
        report.writeBlock(this.cardIssueDate, tr("cardIssueDate"));
        report.writeBlock(this.cardValidityBegin, tr("cardValidityBegin"));
        report.writeBlock(this.cardExpiryDate, tr("cardExpiryDate"));
        report.writeBlock(this.cardHolderName, tr("cardHolderName"));
        report.writeBlock(this.cardHolderBirthDate, tr("cardHolderBirthDate"));
        report.tagValuePair(tr("cardHolderPreferredLanguage"), this.cardHolderPreferredLanguage);
        if (this.dataBlockSize() != 148 ) {
            report.tagValuePair("should have", 148 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

