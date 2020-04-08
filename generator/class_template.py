
DATA_CLASS_TEMPLATE = """

import Block from 'DataTypes/Block';
import DataReader from 'utils/DataReader';
import QString from 'utils/QString';
import RawData from 'DataTypes/RawData';
import FormatStrings from 'utils/FormatStrings';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';
%(subtypeImports)s


export default class %(className)s extends Block {

    static BLOCK_TYPE = %(classTypeCode)s;
    
%(fieldDefinitions)s
    
    constructor(data: ArrayBuffer) {
        super();

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
