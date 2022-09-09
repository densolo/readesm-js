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


export default class VuDetailedSpeedBlock extends DataType {

    static BLOCK_TYPE = 0;


    speedBlockBeginDate: TimeReal;
    speedsPerSecond: RawData;
    static staticSize: number = 64;

    constructor(data: ArrayBuffer) {
        super(data);

        this.speedBlockBeginDate = new TimeReal(data.slice(0));
        this.speedsPerSecond = DataReader.readRawData(data, 4, 60);
    }

    className() {
        return "VuDetailedSpeedBlock";
    }

    title() {
        return "Speed";
    }

    size() {
        return 64;
    }

    toString() {
		let qs = new QString('VuDetailedSpeedBlock');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("speedBlockBeginDate"), this.speedBlockBeginDate.toString());
        report.tagValuePair(tr("speedsPerSecond"), this.speedsPerSecond.toString());
    }
}

