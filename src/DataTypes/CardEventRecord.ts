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

import Timespan from 'DataTypes/Timespan';
import VehicleRegistration from 'DataTypes/VehicleRegistration';


export default class CardEventRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    eventType: number;
    eventTime: Timespan;
    eventVehicleRegistration: VehicleRegistration;
    static staticSize: number = 24;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.eventType = DataReader.readUint8(data, 0);
        this.eventTime = new Timespan(data.slice(1))
        this.eventVehicleRegistration = new VehicleRegistration(data.slice(9))    
    }

    className() {
        return "CardEventRecord";
    }

    title() {
        return "";
    }

    size() {
        return 24;
    }

    toString() {
		let qs = new QString('CardEventRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("eventType"), FormatStrings.eventType(this.eventType));
        report.writeBlock(this.eventTime, tr("eventTime"));
        report.writeBlock(this.eventVehicleRegistration, tr("eventVehicleRegistration"));
    }
}

