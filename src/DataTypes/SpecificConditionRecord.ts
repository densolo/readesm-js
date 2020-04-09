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


export default class SpecificConditionRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    entryTime: TimeReal;
    specificConditionType: number;
    static staticSize: number = 5;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.entryTime = new TimeReal(data.slice(0))
        this.specificConditionType = DataReader.readUint8(data, 4);    
    }

    className() {
        return "SpecificConditionRecord";
    }

    title() {
        return "";
    }

    size() {
        return 5;
    }

    toString() {
		let qs = new QString('SpecificConditionRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.entryTime, tr("entryTime"));
        report.tagValuePair(tr("specificConditionType"), FormatStrings.specificCondition(this.specificConditionType));
    }
}

