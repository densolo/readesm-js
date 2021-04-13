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



export default class Calibration extends CardBlock {

    static BLOCK_TYPE = 0x050a;
    

    calibrationTotalNumber: number;
    calibrationPointerNewestRecord: number;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.calibrationTotalNumber = DataReader.readUint16(data, 5);
        this.calibrationPointerNewestRecord = DataReader.readUint8(data, 7);    
    }

    className() {
        return "Calibration";
    }

    title() {
        return "Card Download";
    }



    toString() {
		let qs = new QString('Calibration');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("calibrationTotalNumber"), this.calibrationTotalNumber);
        report.tagValuePair(tr("calibrationPointerNewestRecord"), this.calibrationPointerNewestRecord);
        if (this.dataBlockSize() != 8 ) {
            report.tagValuePair("should have", 8 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

