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



export default class CardChipIdentification extends CardBlock {

    static BLOCK_TYPE = 0x0005;
    

    icSerialNumber: RawData;
    icManufacturingReference: RawData;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.icSerialNumber = DataReader.readRawData(data, 5, 4);
        this.icManufacturingReference = DataReader.readRawData(data, 9, 4);    
    }

    className() {
        return "CardChipIdentification";
    }

    title() {
        return "Card chip identification";
    }



    toString() {
		let qs = new QString('CardChipIdentification');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("icSerialNumber"), this.icSerialNumber.toString());
        report.tagValuePair(tr("icManufacturingReference"), this.icManufacturingReference.toString());
        if (this.dataBlockSize() != 13 ) {
            report.tagValuePair("should have", 13 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

