// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class


import * as padStart from 'lodash/padStart';
import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import Converter from 'utils/Converter';
import QString from 'utils/QString';
import RawData from 'DataTypes/RawData';
import CardBlock from 'CardBlocks/CardBlock';
import VuBlock from 'VuBlocks/VuBlock';
import DataType from 'DataTypes/DataType';
import FormatStrings from 'utils/FormatStrings';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';

import CertificateAuthority from 'DataTypes/CertificateAuthority';


export default class EncryptedCertificate extends DataType {

    static BLOCK_TYPE = 0;
    

    sign: RawData;
    cndash: RawData;
    certificateAuthorityReference: CertificateAuthority;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.sign = DataReader.readRawData(data, 0, 128);
        this.cndash = DataReader.readRawData(data, 128, 58);
        this.certificateAuthorityReference = new CertificateAuthority(data.slice(186))    
    }

    className() {
        return "EncryptedCertificate";
    }

    title() {
        return "";
    }

    
    size() {
        return 194;
    }


    toString() {
		let qs = new QString('EncryptedCertificate');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("sign"), this.sign.toString());
        report.tagValuePair(tr("cndash"), this.cndash.toString());
        report.writeBlock(this.certificateAuthorityReference, tr("certificateAuthorityReference"));
    }
}

