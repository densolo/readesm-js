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

import CertificateAuthority from 'DataTypes/CertificateAuthority';
import RsaPublicKey from 'DataTypes/RsaPublicKey';


export default class PlainCertificate extends DataType {

    static BLOCK_TYPE = 0;
    

    keyIdentifier: CertificateAuthority;
    rsaPublicKey: RsaPublicKey;
    static staticSize: number = 144;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.keyIdentifier = new CertificateAuthority(data.slice(0))
        this.rsaPublicKey = new RsaPublicKey(data.slice(8))    
    }

    className() {
        return "PlainCertificate";
    }

    title() {
        return "";
    }

    size() {
        return 144;
    }

    toString() {
		let qs = new QString('PlainCertificate');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.keyIdentifier, tr("keyIdentifier"));
        report.writeBlock(this.rsaPublicKey, tr("rsaPublicKey"));
    }
}

