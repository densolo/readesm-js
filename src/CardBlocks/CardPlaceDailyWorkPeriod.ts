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

import PlaceRecord from 'DataTypes/PlaceRecord';


export default class CardPlaceDailyWorkPeriod extends CardBlock {

    static BLOCK_TYPE = 0x0506;
    

    placePointerNewestRecord: number;
    placeRecord: Subblocks<PlaceRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.placePointerNewestRecord = DataReader.readUint8(data, 5);
        this.placeRecord = DataReader.readSubblocksByLength<PlaceRecord>(PlaceRecord, data.slice(6), 0, this.dataBlockSize() - (6));    
    }

    className() {
        return "CardPlaceDailyWorkPeriod";
    }

    title() {
        return "Places";
    }



    toString() {
		let qs = new QString('CardPlaceDailyWorkPeriod');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("placePointerNewestRecord"), this.placePointerNewestRecord);
        report.writeArray(this.placeRecord, tr("placeRecord"));
        if (this.dataBlockSize() != 6  + this.placeRecord.size()) {
            report.tagValuePair("should have", 6  + this.placeRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

