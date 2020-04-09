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

import FullCardNumber from 'DataTypes/FullCardNumber';


export default class CardSlots extends DataType {

    static BLOCK_TYPE = 0;
    

    cardNumberDriverSlotBegin: FullCardNumber;
    cardNumberCoDriverSlotBegin: FullCardNumber;
    cardNumberDriverSlotEnd: FullCardNumber;
    cardNumberCoDriverSlotEnd: FullCardNumber;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardNumberDriverSlotBegin = new FullCardNumber(data.slice(0))
        this.cardNumberCoDriverSlotBegin = new FullCardNumber(data.slice(18))
        this.cardNumberDriverSlotEnd = new FullCardNumber(data.slice(36))
        this.cardNumberCoDriverSlotEnd = new FullCardNumber(data.slice(54))    
    }

    className() {
        return "CardSlots";
    }

    title() {
        return "";
    }

    
    size() {
        return 72;
    }


    toString() {
		let qs = new QString('CardSlots');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.cardNumberDriverSlotBegin, tr("cardNumberDriverSlotBegin"));
        report.writeBlock(this.cardNumberCoDriverSlotBegin, tr("cardNumberCoDriverSlotBegin"));
        report.writeBlock(this.cardNumberDriverSlotEnd, tr("cardNumberDriverSlotEnd"));
        report.writeBlock(this.cardNumberCoDriverSlotEnd, tr("cardNumberCoDriverSlotEnd"));
    }
}

