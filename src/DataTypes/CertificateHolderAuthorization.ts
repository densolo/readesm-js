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



export default class CertificateHolderAuthorization extends DataType {

    static BLOCK_TYPE = 0;
    

    tachographApplicationId: RawData;
    equipmentType: number;
    static staticSize: number = 7;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.tachographApplicationId = DataReader.readRawData(data, 0, 6);
        this.equipmentType = DataReader.readUint8(data, 6);    
    }

    className() {
        return "CertificateHolderAuthorization";
    }

    title() {
        return "";
    }

    size() {
        return 7;
    }

    toString() {
		let qs = new QString('CertificateHolderAuthorization');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("tachographApplicationId"), this.tachographApplicationId.toString());
        report.tagValuePair(tr("equipmentType"), FormatStrings.equipmentType(this.equipmentType));
    }
}

