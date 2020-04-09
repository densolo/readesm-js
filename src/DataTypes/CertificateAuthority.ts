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



export default class CertificateAuthority extends DataType {

    static BLOCK_TYPE = 0;
    

    nationNumeric: number;
    nationAlpha: string;
    keySerialNumber: number;
    additionalInfo: RawData;
    caIdentifer: number;
    static staticSize: number = 8;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.nationNumeric = DataReader.readUint8(data, 0);
        this.nationAlpha = DataReader.readString(data, 1, 3).toString();
        this.keySerialNumber = DataReader.readUint8(data, 4);
        this.additionalInfo = DataReader.readRawData(data, 5, 2);
        this.caIdentifer = DataReader.readUint8(data, 7);    
    }

    className() {
        return "CertificateAuthority";
    }

    title() {
        return "";
    }

    size() {
        return 8;
    }

    toString() {
		let qs = new QString('CertificateAuthority');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("nationNumeric"), FormatStrings.nationNumeric(this.nationNumeric));
        report.tagValuePair(tr("nationAlpha"), this.nationAlpha);
        report.tagValuePair(tr("keySerialNumber"), this.keySerialNumber);
        report.tagValuePair(tr("additionalInfo"), this.additionalInfo.toString());
        report.tagValuePair(tr("caIdentifer"), this.caIdentifer);
    }
}

