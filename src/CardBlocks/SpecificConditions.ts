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

import SpecificConditionRecord from 'DataTypes/SpecificConditionRecord';


export default class SpecificConditions extends CardBlock {

    static BLOCK_TYPE = 0x0522;
    

    specificConditionRecord: Subblocks<SpecificConditionRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.specificConditionRecord = DataReader.readSubblocksByLength<SpecificConditionRecord>(SpecificConditionRecord, data.slice(5), 0, this.dataBlockSize() - (5));    
    }

    className() {
        return "SpecificConditions";
    }

    title() {
        return "Specific Conditions";
    }



    toString() {
		let qs = new QString('SpecificConditions');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeArray(this.specificConditionRecord, tr("specificConditionRecord"));
        if (this.dataBlockSize() != 5  + this.specificConditionRecord.size()) {
            report.tagValuePair("should have", 5  + this.specificConditionRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

