
DATA_CLASS_TEMPLATE = """

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
%(subtypeImports)s


export default class %(className)s extends %(baseClass)s {

    static BLOCK_TYPE = %(classTypeCode)s;
    
%(fieldDefinitions)s
    
    constructor(data: ArrayBuffer) {
        super(data);

%(fieldInitializations)s    
    }

    className() {
        return "%(className)s";
    }

    title() {
        return "%(classTitle)s";
    }

%(classSizeMethod)s

    toString() {
		let qs = %(toString)s;
        return qs.toString();
    }

    printOn(report: Reporter) {
%(printOn)s
    }
}
"""

def generateClassCode(ctx):

    if ctx['classSize']:
        ctx['classSizeMethod'] = """    
    size() {
        return %(classSize)s;
    }
""" % ctx

    return DATA_CLASS_TEMPLATE % ctx
