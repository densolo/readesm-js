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
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class VuPlaceDailyWorkPeriodRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    fullCardNumber: FullCardNumber;
    placeRecord: PlaceRecord;
    static staticSize: number = 28;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.fullCardNumber = new FullCardNumber(data.slice(0));
        this.placeRecord = new PlaceRecord(data.slice(18));    
    }

    className() {
        return "VuPlaceDailyWorkPeriodRecord";
    }

    title() {
        return "";
    }

    size() {
        return 28;
    }

    toString() {
		let qs = new QString('VuPlaceDailyWorkPeriodRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.fullCardNumber, tr("fullCardNumber"));
        report.writeBlock(this.placeRecord, tr("placeRecord"));
    }
}

