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



export default class VehicleRegistration extends DataType {

    static BLOCK_TYPE = 0;
    

    vehicleRegistrationNation: number;
    vehicleRegistrationNumber: string;
    static staticSize: number = 15;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.vehicleRegistrationNation = DataReader.readUint8(data, 0);
        this.vehicleRegistrationNumber = DataReader.readCodePageString(data, 1, 14).toString();    
    }

    className() {
        return "VehicleRegistration";
    }

    title() {
        return "";
    }

    size() {
        return 15;
    }

    toString() {
		let qs = new QString("%1 (%2)")
			.arg(this.vehicleRegistrationNumber)
			.arg(FormatStrings.nationNumeric(this.vehicleRegistrationNation)).toString();
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("vehicleRegistrationNation"), FormatStrings.nationNumeric(this.vehicleRegistrationNation));
        report.tagValuePair(tr("vehicleRegistrationNumber"), this.vehicleRegistrationNumber);
    }
}

