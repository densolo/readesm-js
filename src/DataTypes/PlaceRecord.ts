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


export default class PlaceRecord extends DataType {

    static BLOCK_TYPE = 0;
    

    entryTime: TimeReal;
    entryTypeDailyWorkPeriod: number;
    dailyWorkPeriodCountry: number;
    dailyWorkPeriodRegion: number;
    vehicleOdometerValue: number;
    static staticSize: number = 10;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.entryTime = new TimeReal(data.slice(0))
        this.entryTypeDailyWorkPeriod = DataReader.readUint8(data, 4);
        this.dailyWorkPeriodCountry = DataReader.readUint8(data, 5);
        this.dailyWorkPeriodRegion = DataReader.readUint8(data, 6);
        this.vehicleOdometerValue = DataReader.readUint24(data, 7);    
    }

    className() {
        return "PlaceRecord";
    }

    title() {
        return "";
    }

    size() {
        return 10;
    }

    toString() {
		let qs = new QString("%1%2 - %3 - %4 km")
			.arg(FormatStrings.nationNumeric(this.dailyWorkPeriodCountry))
			.arg(this.dailyWorkPeriodRegion == 0 ? new QString() : ", " + FormatStrings.regionNumeric(this.dailyWorkPeriodRegion))
			.arg(this.entryTime.toString())
			.arg(this.vehicleOdometerValue).toString();
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.entryTime, tr("entryTime"));
        report.tagValuePair(tr("entryTypeDailyWorkPeriod"), FormatStrings.dailyWorkPeriod(this.entryTypeDailyWorkPeriod));
        report.tagValuePair(tr("dailyWorkPeriodCountry"), FormatStrings.nationNumeric(this.dailyWorkPeriodCountry));
        report.tagValuePair(tr("dailyWorkPeriodRegion"), FormatStrings.regionNumeric(this.dailyWorkPeriodRegion));
        report.tagValuePair(tr("vehicleOdometerValue"), this.vehicleOdometerValue);
    }
}

