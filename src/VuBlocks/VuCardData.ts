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



export default class VuCardData extends VuBlock {

    static BLOCK_TYPE = 0x6;
    

    
    constructor(data: ArrayBuffer) {
        super(data);


        this.hasSignature = false;    
    }

    className() {
        return "VuCardData";
    }

    title() {
        return "Card Data";
    }



    toString() {
		let qs = new QString('VuCardData');
        return qs.toString();
    }

    printOn(report: Reporter) {

    }
}

