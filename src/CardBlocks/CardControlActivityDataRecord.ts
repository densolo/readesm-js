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
import Timespan from 'DataTypes/Timespan';
import VehicleRegistration from 'DataTypes/VehicleRegistration';
import FullCardNumber from 'DataTypes/FullCardNumber';


export default class CardControlActivityDataRecord extends CardBlock {

    static BLOCK_TYPE = 0x0508;
    

    controlType: number;
    controlTime: TimeReal;
    controlCardNumber: FullCardNumber;
    controlVehicleRegistration: VehicleRegistration;
    controlDownloadPeriod: Timespan;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.controlType = DataReader.readUint8(data, 5);
        this.controlTime = new TimeReal(data.slice(6))
        this.controlCardNumber = new FullCardNumber(data.slice(10))
        this.controlVehicleRegistration = new VehicleRegistration(data.slice(28))
        this.controlDownloadPeriod = new Timespan(data.slice(43))    
    }

    className() {
        return "CardControlActivityDataRecord";
    }

    title() {
        return "Control Activity Data";
    }



    toString() {
		let qs = new QString('CardControlActivityDataRecord');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("controlType"), this.controlType);
        report.writeBlock(this.controlTime, tr("controlTime"));
        report.writeBlock(this.controlCardNumber, tr("controlCardNumber"));
        report.writeBlock(this.controlVehicleRegistration, tr("controlVehicleRegistration"));
        report.writeBlock(this.controlDownloadPeriod, tr("controlDownloadPeriod"));
        if (this.dataBlockSize() != 51 ) {
            report.tagValuePair("should have", 51 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

