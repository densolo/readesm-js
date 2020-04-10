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


export default class CardVehicleRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    vehicleOdometerBegin: number;
    vehicleOdometerEnd: number;
    vehicleUse: Timespan;
    registration: VehicleRegistration;
    vuDataBlockCounter: number;
    static staticSize: number = 31;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.vehicleOdometerBegin = DataReader.readUint24(data, 0);
        this.vehicleOdometerEnd = DataReader.readUint24(data, 3);
        this.vehicleUse = new Timespan(data.slice(6))
        this.registration = new VehicleRegistration(data.slice(14))
        this.vuDataBlockCounter = DataReader.readUint16(data, 29);    
    }

    className() {
        return "CardVehicleRecord";
    }

    title() {
        return "";
    }

    size() {
        return 31;
    }

    toString() {
		let qs = new QString(tr("%1 km on %2 (%3)"))
			.arg(this.vehicleOdometerEnd - this.vehicleOdometerBegin)
			.arg(this.registration.toString())
			.arg(this.vehicleUse.toString()).toString();
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("vehicleOdometerBegin"), this.vehicleOdometerBegin);
        report.tagValuePair(tr("vehicleOdometerEnd"), this.vehicleOdometerEnd);
        report.writeBlock(this.vehicleUse, tr("vehicleUse"));
        report.writeBlock(this.registration, tr("registration"));
        report.tagValuePair(tr("vuDataBlockCounter"), this.vuDataBlockCounter);
    }
}

