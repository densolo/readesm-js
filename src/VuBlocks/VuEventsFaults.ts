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

import VuTimeAdjustmentRecord from 'DataTypes/VuTimeAdjustmentRecord';
import VuEventRecord from 'DataTypes/VuEventRecord';
import TimeReal from 'DataTypes/TimeReal';
import VuFaultRecord from 'DataTypes/VuFaultRecord';
import VuOverspeedingEventRecord from 'DataTypes/VuOverspeedingEventRecord';


export default class VuEventsFaults extends VuBlock {

    static BLOCK_TYPE = 0x3;


    vuFaultRecord: Subblocks<VuFaultRecord>;
    vuEventRecord: Subblocks<VuEventRecord>;
    lastOverspeedControlTime: TimeReal;
    firstOverspeedSince: TimeReal;
    numberOfOverspeedSince: number;
    vuOverspeedingEventRecord: Subblocks<VuOverspeedingEventRecord>;
    vuTimeAdjustmentRecord: Subblocks<VuTimeAdjustmentRecord>;

    constructor(data: ArrayBuffer) {
        super(data);

        this.vuFaultRecord = DataReader.readSubblocksByCount<VuFaultRecord>(VuFaultRecord, data.slice(3), 0, (DataReader.readUint8(data, 2)));
        this.vuEventRecord = DataReader.readSubblocksByCount<VuEventRecord>(VuEventRecord, data.slice(3 + this.vuFaultRecord.size() + 1), 0, (DataReader.readUint8(data, 3 + this.vuFaultRecord.size())));
        const recSize = this.vuFaultRecord.size() + this.vuEventRecord.size()
        this.lastOverspeedControlTime = new TimeReal(data.slice(4 + recSize));
        this.firstOverspeedSince = new TimeReal(data.slice(8 + recSize));
        this.numberOfOverspeedSince = DataReader.readUint8(data, 12 + recSize);
        this.vuOverspeedingEventRecord = DataReader.readSubblocksByCount<VuOverspeedingEventRecord>(VuOverspeedingEventRecord, data.slice(13 + recSize + 1), 0, (DataReader.readUint8(data, 13 + recSize)));
        this.vuTimeAdjustmentRecord = DataReader.readSubblocksByCount<VuTimeAdjustmentRecord>(VuTimeAdjustmentRecord, data.slice(14 + recSize + 1), 0, (DataReader.readUint8(data, 14 + recSize)));
        this.nextBlock = this.getNext(data, 0x4)
    }

    className() {
        return "VuEventsFaults";
    }

    title() {
        return "Events and faults";
    }

    size() {
        return this.nextBlock
    }

    toString() {
		let qs = new QString('VuEventsFaults');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeArray(this.vuFaultRecord, tr("vuFaultRecord"));
        report.writeArray(this.vuEventRecord, tr("vuEventRecord"));
        report.tagValuePair(tr("lastOverspeedControlTime"), this.lastOverspeedControlTime.toString());
        report.tagValuePair(tr("firstOverspeedSince"), this.firstOverspeedSince.toString());
        report.tagValuePair(tr("numberOfOverspeedSince"), this.numberOfOverspeedSince);
        report.writeArray(this.vuOverspeedingEventRecord, tr("vuOverspeedingEventRecord"));
        report.writeArray(this.vuTimeAdjustmentRecord, tr("vuTimeAdjustmentRecord"));
    }
}

