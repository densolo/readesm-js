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

import EncryptedCertificate from 'DataTypes/EncryptedCertificate';


export default class CardCertificate extends CardBlock {

    static BLOCK_TYPE = 0xc100;
    

    certificate: EncryptedCertificate;
    
    constructor(data: ArrayBuffer) {
        super(data);


        this.certificate = new EncryptedCertificate(data.slice(5))    
    }

    className() {
        return "CardCertificate";
    }

    title() {
        return "Card Certificate";
    }



    toString() {
		let qs = new QString('CardCertificate');
        return qs.toString();
    }

    printOn(report: Reporter) {

        report.writeBlock(this.certificate, tr("certificate"));
        if (this.dataBlockSize() != 199 ) {
            report.tagValuePair("should have", 199 );
            report.tagValuePair("has", this.dataBlockSize());
        }
    }
}

