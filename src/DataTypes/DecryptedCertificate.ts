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

import CertificateHolderAuthorization from 'DataTypes/CertificateHolderAuthorization';
import KeyIdentifier from 'DataTypes/KeyIdentifier';
import RsaPublicKey from 'DataTypes/RsaPublicKey';
import TimeReal from 'DataTypes/TimeReal';
import CertificateAuthority from 'DataTypes/CertificateAuthority';


export default class DecryptedCertificate extends DataType {

    static BLOCK_TYPE = 0;
    

    certificateProfileIdentifier: number;
    certificateAuthorityReference: CertificateAuthority;
    certificateHolderAuthorization: CertificateHolderAuthorization;
    endOfValidity: TimeReal;
    certificateHolderReference: KeyIdentifier;
    rsaPublicKey: RsaPublicKey;
    static staticSize: number = 164;
    
    constructor(data: ArrayBuffer) {
        super(data);

        this.certificateProfileIdentifier = DataReader.readUint8(data, 0);
        this.certificateAuthorityReference = new CertificateAuthority(data.slice(1))
        this.certificateHolderAuthorization = new CertificateHolderAuthorization(data.slice(9))
        this.endOfValidity = new TimeReal(data.slice(16))
        this.certificateHolderReference = new KeyIdentifier(data.slice(20))
        this.rsaPublicKey = new RsaPublicKey(data.slice(28))    
    }

    className() {
        return "DecryptedCertificate";
    }

    title() {
        return "";
    }

    size() {
        return 164;
    }

    toString() {
		let qs = new QString('DecryptedCertificate');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.tagValuePair(tr("certificateProfileIdentifier"), this.certificateProfileIdentifier);
        report.writeBlock(this.certificateAuthorityReference, tr("certificateAuthorityReference"));
        report.writeBlock(this.certificateHolderAuthorization, tr("certificateHolderAuthorization"));
        report.writeBlock(this.endOfValidity, tr("endOfValidity"));
        report.writeBlock(this.certificateHolderReference, tr("certificateHolderReference"));
        report.writeBlock(this.rsaPublicKey, tr("rsaPublicKey"));
    }
}

