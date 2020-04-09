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



export default class FullCardNumber extends DataType {

    static BLOCK_TYPE = 0;
    

    cardType: number;
    cardIssuingMemberState: number;
    cardNumber: string;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardType = DataReader.readUint8(data, 0);
        this.cardIssuingMemberState = DataReader.readUint8(data, 1);
        this.cardNumber = DataReader.readString(data, 2, 16).toString();    
    }

    className() {
        return "FullCardNumber";
    }

    title() {
        return "";
    }

    
    size() {
        return 18;
    }


    toString() {
		let qs = new QString("%1 (%2, %3)")
		.arg(this.cardNumber)
		.arg(FormatStrings.nationNumeric(this.cardIssuingMemberState))
		.arg(FormatStrings.equipmentType(this.cardType));
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("cardType"), FormatStrings.equipmentType(this.cardType));
        report.tagValuePair(tr("cardIssuingMemberState"), FormatStrings.nationNumeric(this.cardIssuingMemberState));
        report.tagValuePair(tr("cardNumber"), this.cardNumber);
    }
}

