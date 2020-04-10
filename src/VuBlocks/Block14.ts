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



export default class Block14 extends VuBlock {

    static BLOCK_TYPE = 0x14;
    

    data: RawData;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.data = DataReader.readRawData(data, 0, 2);
        this.hasSignature = false;    
    }

    className() {
        return "Block14";
    }

    title() {
        return "Unknown Block with TREP 0x14";
    }

    size() {
        return 2;
    }

    toString() {
		let qs = new QString('Block14');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("data"), this.data.toString());
    }
}

