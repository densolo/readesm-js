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

import CardEventRecord from 'DataTypes/CardEventRecord';


export default class CardFaultData extends CardBlock {

    static BLOCK_TYPE = 0x0503;
    

    cardEventRecord: Subblocks<CardEventRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.cardEventRecord = DataReader.readSubblocksByLength<CardEventRecord>(CardEventRecord, data.slice(5), 0, this.dataBlockSize() - (5));    
    }

    className() {
        return "CardFaultData";
    }

    title() {
        return "Faults Data";
    }



    toString() {
		let qs = new QString('CardFaultData');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeArray(this.cardEventRecord, tr("cardEventRecord"));
        if (this.dataBlockSize() != 5  + this.cardEventRecord.size()) {
            report.tagValuePair("should have", 5  + this.cardEventRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

