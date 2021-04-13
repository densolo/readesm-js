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



export default class CardDownloadWorkshop extends CardBlock {

    static BLOCK_TYPE = 0x0509;
    

    noOfCalibrationsSinceDownload: number;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.noOfCalibrationsSinceDownload = DataReader.readUint16(data, 5);    
    }

    className() {
        return "CardDownloadWorkshop";
    }

    title() {
        return "Card Download";
    }



    toString() {
		let qs = new QString('CardDownloadWorkshop');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("noOfCalibrationsSinceDownload"), this.noOfCalibrationsSinceDownload);
        if (this.dataBlockSize() != 7 ) {
            report.tagValuePair("should have", 7 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

