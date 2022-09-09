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
import VuFaultRecord from "../DataTypes/VuFaultRecord";
import Subblocks from "../DataTypes/Subblocks";


export default class VuDetailedSpeedData extends VuBlock {

    static BLOCK_TYPE = 0x4;

    vuDetailedSpeedBlock: Subblocks<VuDetailedSpeedBlock>;


    constructor(data: ArrayBuffer) {
        super(data);
        this.vuDetailedSpeedBlock = DataReader.readSubblocksByCount<VuDetailedSpeedBlock>(VuDetailedSpeedBlock,
            data.slice(4), 0, (DataReader.readUint8(data, 2)));
        this.nextBlock = this.getNext(data)
    }

    className() {
        return "VuDetailedSpeedData";
    }

    title() {
        return "Speed Data";
    }

    getNext(data) {
        const _data = new Uint8Array(data)
        let i = 0
        while (i != -1) {
            i = _data.indexOf(0x76, i+1)
            if (_data[i + 1] == 0x05) return i
        }
    }

    size() {
        return this.nextBlock
    }


    toString() {
		let qs = new QString('VuDetailedSpeedData');
        return qs.toString();
    }

    printOn(report: Reporter) {

    }
}

