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

import CardVehicleRecord from 'DataTypes/CardVehicleRecord';


export default class CardVehiclesUsed extends CardBlock {

    static BLOCK_TYPE = 0x0505;
    

    vehiclePointerNewestRecord: number;
    cardVehicleRecord: Subblocks<CardVehicleRecord>;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.vehiclePointerNewestRecord = DataReader.readUint16(data, 5);
        this.cardVehicleRecord = DataReader.readSubblocksByLength<CardVehicleRecord>(CardVehicleRecord, data.slice(7), 0, this.dataBlockSize() - (7));    
    }

    className() {
        return "CardVehiclesUsed";
    }

    title() {
        return "Vehicles Used";
    }



    toString() {
		let qs = new QString('CardVehiclesUsed');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("vehiclePointerNewestRecord"), this.vehiclePointerNewestRecord);
        report.writeArray(this.cardVehicleRecord, tr("cardVehicleRecord"));
        if (this.dataBlockSize() != 7  + this.cardVehicleRecord.size()) {
            report.tagValuePair("should have", 7  + this.cardVehicleRecord.size());
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

