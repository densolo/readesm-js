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



export default class DriverCardApplicationIdentification extends CardBlock {

    static BLOCK_TYPE = 0x0501;
    

    typeOfTachographCardId: number;
    cardStructureVersion: RawData;
    noOfEventsPerType: number;
    noOfFaultsPerType: number;
    activityStructureLength: number;
    noOfCardVehicleRecords: number;
    noOfCardPlaceRecords: number;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.typeOfTachographCardId = DataReader.readUint8(data, 5);
        this.cardStructureVersion = DataReader.readRawData(data, 6, 2);
        this.noOfEventsPerType = DataReader.readUint8(data, 8);
        this.noOfFaultsPerType = DataReader.readUint8(data, 9);
        this.activityStructureLength = DataReader.readUint16(data, 10);
        this.noOfCardVehicleRecords = DataReader.readUint16(data, 12);
        this.noOfCardPlaceRecords = DataReader.readUint8(data, 14);    
    }

    className() {
        return "DriverCardApplicationIdentification";
    }

    title() {
        return "Application Identification";
    }



    toString() {
		let qs = new QString('DriverCardApplicationIdentification');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("typeOfTachographCardId"), FormatStrings.equipmentType(this.typeOfTachographCardId));
        report.tagValuePair(tr("cardStructureVersion"), this.cardStructureVersion.toString());
        report.tagValuePair(tr("noOfEventsPerType"), this.noOfEventsPerType);
        report.tagValuePair(tr("noOfFaultsPerType"), this.noOfFaultsPerType);
        report.tagValuePair(tr("activityStructureLength"), this.activityStructureLength);
        report.tagValuePair(tr("noOfCardVehicleRecords"), this.noOfCardVehicleRecords);
        report.tagValuePair(tr("noOfCardPlaceRecords"), this.noOfCardPlaceRecords);
        if (this.size() != 15 ) {
            report.tagValuePair("should have", 15 );
            report.tagValuePair("has", this.size());
        }
    }
}

