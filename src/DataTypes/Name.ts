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



export default class Name extends DataType {

    static BLOCK_TYPE = 0;
    

    surname: string;
    firstNames: string;
    static staticSize: number = 72;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.surname = DataReader.readCodePageString(data, 0, 36).toString();
        this.firstNames = DataReader.readCodePageString(data, 36, 36).toString();    
    }

    className() {
        return "Name";
    }

    title() {
        return "";
    }

    size() {
        return 72;
    }

    toString() {
		let qs = this.surname + ", " + this.firstNames;
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("surname"), this.surname);
        report.tagValuePair(tr("firstNames"), this.firstNames);
    }
}

