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


export default class LastCardDownload extends CardBlock {

    static BLOCK_TYPE = 0x050e;
    

    lastCardDownload: TimeReal;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.lastCardDownload = new TimeReal(data.slice(5))    
    }

    className() {
        return "LastCardDownload";
    }

    title() {
        return "Card Download";
    }



    toString() {
		let qs = new QString('LastCardDownload');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.lastCardDownload, tr("lastCardDownload"));
        if (this.dataBlockSize() != 9 ) {
            report.tagValuePair("should have", 9 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

