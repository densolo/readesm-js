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

import LargeNumber from 'DataTypes/LargeNumber';


export default class RawRsaPublicKey extends DataType {

    static BLOCK_TYPE = 0;
    

    n: LargeNumber;
    e: LargeNumber;
    static staticSize: number = 136;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.n = new LargeNumber(data.slice(0), 128)
        this.e = new LargeNumber(data.slice(128), 8)    
    }

    className() {
        return "RawRsaPublicKey";
    }

    title() {
        return "";
    }

    size() {
        return 136;
    }

    toString() {
		let qs = new QString('RsaPublicKey');
        return qs.toString();
    }

    printOn(report: Reporter) {

    }
}

