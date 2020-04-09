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

import VuDetailedSpeedBlock from 'DataTypes/VuDetailedSpeedBlock';


export default class VuDetailedSpeedData extends VuBlock {

    static BLOCK_TYPE = 0x4;
    

    vuDetailedSpeedBlock: VuDetailedSpeedBlock[];
    
    constructor(data: ArrayBuffer) {
        super(data);

    
    }

    className() {
        return "VuDetailedSpeedData";
    }

    title() {
        return "";
    }

    
    size() {
        return 64;
    }


    toString() {
		let qs = new QString('VuDetailedSpeedData');
        return qs.toString();
    }

    printOn(report: Reporter) {

    }
}

