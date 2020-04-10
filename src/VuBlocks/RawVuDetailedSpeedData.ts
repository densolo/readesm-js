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

import VuDetailedSpeedBlock from 'DataTypes/VuDetailedSpeedBlock';


export default class RawVuDetailedSpeedData extends VuBlock {

    static BLOCK_TYPE = 0x4;
    

    vuDetailedSpeedBlock: Subblocks<VuDetailedSpeedBlock>;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.vuDetailedSpeedBlock = DataReader.readSubblocksByCount<VuDetailedSpeedBlock>(VuDetailedSpeedBlock, data.slice(0 + 2), 0, (DataReader.readUint16(data, 0)));    
    }

    className() {
        return "RawVuDetailedSpeedData";
    }

    title() {
        return "Detailed Speed";
    }

    size() {
        return 2;
    }

    toString() {
		let qs = new QString('VuDetailedSpeedData');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeArray(this.vuDetailedSpeedBlock, tr("vuDetailedSpeedBlock"));
    }
}

