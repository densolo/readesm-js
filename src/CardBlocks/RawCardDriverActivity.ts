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



export default class RawCardDriverActivity extends CardBlock {

    static BLOCK_TYPE = 0x0504;
    

    oldestRecord: number;
    newestRecord: number;
    cyclicData: RawData;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.oldestRecord = DataReader.readUint16(data, 5);
        this.newestRecord = DataReader.readUint16(data, 7);
        this.cyclicData = DataReader.readRawData(data, 9, this.dataBlockSize() - (9));    
    }

    className() {
        return "RawCardDriverActivity";
    }

    title() {
        return "Driver Activity Data";
    }



    toString() {
		let qs = new QString('CardDriverActivity');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("oldestRecord"), this.oldestRecord);
        report.tagValuePair(tr("newestRecord"), this.newestRecord);
        report.tagValuePair(tr("cyclicData"), this.cyclicData.toString());
        if (this.size() != 9 ) {
            report.tagValuePair("should have", 9 );
            report.tagValuePair("has", this.size());
        }
    }
}

