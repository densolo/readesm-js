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
import VehicleRegistration from 'DataTypes/VehicleRegistration';


export default class CardCurrentUse extends CardBlock {

    static BLOCK_TYPE = 0x0507;
    

    sessionOpenTime: TimeReal;
    sessionOpenVehicle: VehicleRegistration;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.sessionOpenTime = new TimeReal(data.slice(5))
        this.sessionOpenVehicle = new VehicleRegistration(data.slice(9))    
    }

    className() {
        return "CardCurrentUse";
    }

    title() {
        return "Current Usage";
    }



    toString() {
		let qs = new QString('CardCurrentUse');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.sessionOpenTime, tr("sessionOpenTime"));
        report.writeBlock(this.sessionOpenVehicle, tr("sessionOpenVehicle"));
        if (this.dataBlockSize() != 24 ) {
            report.tagValuePair("should have", 24 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

