#!/usr/bin/python
# -*- coding: utf-8 -*-

## Generate TypeScript classes needed to read tachograph data
## The script is based on C++ generator script by Andreas Gölzer 
## from the link https://sourceforge.net/p/readesm/code/HEAD/tree/fileformat/generate.py

# remove auto-gen'd files with
# now for python 3
# find . \( ! -regex '.*/\..*' ! -name "generate.py" \) | xargs grep -snH "AUTO-GENERATED" --color | cut -f1 -d':' | xargs rm

from xml.etree.ElementTree import ElementTree
import os
import re

APP_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

from class_template import generateClassCode


def main():
    xmlFilepath = os.path.join(APP_ROOT, 'resources/DataDefinitions.xml')
    tree = readXml(xmlFilepath)

    typesMap = parseTypeSizes(tree)

    generateDataTypes(tree, typesMap)


def generateDataTypes(tree, typesMap):

    for d in tree.findall('DataType'):
        className, classCode = generateDataType(d, typesMap)
        writeCodeFile(className, 'DataTypes', classCode)

    for d in tree.findall('CardBlock'):
        className, classCode = generateDataType(d, typesMap)
        writeCodeFile(className, 'CardBlocks', classCode)

    for d in tree.findall('VuBlock'):
        className, classCode = generateDataType(d, typesMap)
        writeCodeFile(className, 'VuBlocks', classCode)


def generateDataType(d, typesMap):
    className = d.get('name')
    classType = d.tag
    rawClassName = 'Raw' + className if d.get('hasrefined') else className
    comment = d.find('comment')
    
    ctx = {
        'offset': 5 if classType == 'CardBlock' else 0,
        'offsetextra': '',

        'comment': "// %s" % comment.text if comment else "",
        'baseClass': classType,
        'className': rawClassName,
        'classTitle': '',
        'classSize': 0,
        'classSizeMethod': '',
        'classTypeCode': d.get('type') or '0',

        'subtypeImports': '',
        'fieldDefinitions': '',
        'fieldInitializations': '',

        'toString': '',
        'printOn': ''
    }

    fields = set()

    for xmlField in d.find('content'):
        fields.add(xmlField.get('name') or lcfirst(xmlField.get('type')))
        sz = parseFieldSize(classType, className, xmlField, typesMap)
        parseField(classType, className, xmlField, sz, typesMap, ctx)

    parseTitle(d, className, fields, ctx)
    parseToString(d, className, fields, ctx)

    if d.tag != 'CardBlock':
        ctx['classSize'] = ctx['offset']  # + extraoffset for Subblocks

    if d.tag == 'CardBlock':
        ctx['printOn'] += """
        if (this.dataBlockSize() != %(offset)i %(offsetextra)s) {
            report.tagValuePair("should have", %(offset)i %(offsetextra)s);
            report.tagValuePair("has", this.dataBlockSize());
        }""" % {
            'offset': ctx['offset'],
            'offsetextra': ctx['offsetextra']
        }  

    if d.tag == 'VuBlock' and d.get('requiresSignature') == 'no':
        ctx['fieldInitializations'] += '\n        this.hasSignature = false;'
    
    if d.tag == 'DataType':
        ctx['fieldDefinitions'] += '\n    static staticSize: number = %s;' % ctx['offset']

    classCode = generateClassCode(ctx)

    return rawClassName, classCode


def parseFieldSize(classType, className, xmlField, typesMap):
    sz = xmlField.get('length')

    if sz:
        return int(sz)
    elif xmlField.tag in typesMap:
        return typesMap[xmlField.tag].size
    elif classType == 'CardBlock' and xmlField.tag == 'RawData':
        return 0
    elif xmlField.tag == 'Subblocks':
        tag = xmlField.get('type')
        return typesMap[tag].size
    else:
        raise ValueError("Size not found for %s::%s" % (className, xmlField.tag))
    return sz


def parseField(classType, className, xmlField, fieldSize, typesMap, ctx):
    name = xmlField.get('name')
    
    if xmlField.tag == 'int':
        encoding = xmlField.get('encoding')

        ctx['fieldDefinitions'] += '\n    %s: number;' % name
        
        if encoding == 'BCD':
            ctx['fieldInitializations'] += '\n        this.%s = DataReader.readBCD%s(data, %s);' % (
                name, fieldSize*8, ctx['offset']
            )
        else:
            ctx['fieldInitializations'] += '\n        this.%s = DataReader.readUint%s(data, %s);' % (
                name, fieldSize*8, ctx['offset']
            )
        
        tableName = xmlField.get('table')
        unit = xmlField.get('unit')
        if tableName:
            ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), FormatStrings.%s(this.%s));' % (name, tableName, name)
        elif unit:
            ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), new QString("%%1 %s").arg(this.%s).toString());' % (name, unit, name)
        else:
            ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s);' % (name, name)
        
    elif xmlField.tag == 'RawData':
        if fieldSize == 0:
            fileSizeExp = 'this.dataBlockSize() - (%s)' % ctx['offset']
        else:
            fileSizeExp = fieldSize

        ctx['fieldDefinitions'] += '\n    %s: RawData;' % name
        ctx['fieldInitializations'] += '\n        this.%s = DataReader.readRawData(data, %s, %s);' % (
            name, ctx['offset'], fileSizeExp
        )
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s.toString());' % (name, name)

    elif xmlField.tag == 'string':
        ctx['fieldDefinitions'] += '\n    %s: string;' % name
        ctx['fieldInitializations'] += '\n        this.%s = DataReader.readString(data, %s, %s).toString();' % (
            name, ctx['offset'], fieldSize
        )
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s);' % (name, name)

    elif xmlField.tag == 'cpstring':
        ctx['fieldDefinitions'] += '\n    %s: string;' % name
        ctx['fieldInitializations'] += '\n        this.%s = DataReader.readCodePageString(data, %s, %s).toString();' % (
            name, ctx['offset'], fieldSize
        )
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s);' % (name, name)

    elif xmlField.tag in typesMap:
        t = typesMap[xmlField.tag]
        ctx['subtypeImports'] += "\nimport %s from '%s/%s';" % (t.name, t.directory, t.name)
        ctx['fieldDefinitions'] += '\n    %s: %s;' % (name, t.name)
        ctx['fieldInitializations'] += '\n        this.%s = new %s(data.slice(%s));' % (
            name, t.name, ctx['offset']
        )

        if xmlField.tag in hasToString:
            ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s.toString());' % (name, name)
        else:
            ctx['printOn'] += '\n        report.writeBlock(this.%s, tr("%s"));' % (name, name)

    elif xmlField.tag in ('LargeNumber',):
        typeName = xmlField.tag
        ctx['subtypeImports'] += "\nimport %s from 'DataTypes/%s';" % (typeName, typeName)
        ctx['fieldDefinitions'] += '\n    %s: %s;' % (name, typeName)
        ctx['fieldInitializations'] += '\n        this.%s = new %s(data.slice(%s), %s)' % (
            name, typeName, ctx['offset'], fieldSize
        )
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s.toString());' % (name, name)

    elif xmlField.tag == 'Subblocks':
        name = lcfirst(xmlField.get('type'))
        typeName = xmlField.get('type')
        counterLength = xmlField.get('counterlength')
        fieldSize = 0

        ctx['subtypeImports'] += "\nimport %s from 'DataTypes/%s';" % (typeName, typeName)
        ctx['fieldDefinitions'] += '\n    %s: Subblocks<%s>;' % (name, typeName)

        if counterLength:
            length = int(counterLength)
            subcount = 'DataReader.readUint%(sz)s(data, %(fullOffset)s)' % {
                'sz': length * 8,
                'fullOffset': ctx['offset']
            }
            ctx['fieldInitializations'] += '\n        this.%s = DataReader.readSubblocksByCount<%s>(%s, data.slice(%s + %s), 0, (%s));' % (
                name, typeName, typeName, ctx['offset'], counterLength, subcount
            )
            fieldSize = length

        elif classType == 'CardBlock':
            ctx['fieldInitializations'] += '\n        this.%s = DataReader.readSubblocksByLength<%s>(%s, data.slice(%s), 0, this.dataBlockSize() - (%s));' % (
                name, typeName, typeName, ctx['offset'], ctx['offset']
            )
        else:
            raise ValueError("Wrong block type: %s for subblock %s.%s" % (classType, className, name))

        ctx['printOn'] += '\n        report.writeArray(this.%s, tr("%s"));' % (name, name)
        
        ctx['offsetextra'] = ' + this.%s.size()' % name

    else:
        raise ValueError("Unknown field type %s of tag %s.%s" % (xmlField.tag, className, name))

    ctx['offset'] += fieldSize


def parseTitle(d, className, fields, ctx):
    title = d.find('title')
    if title is not None:
        if title.get('dynamic'):
            titleCode = convertDynamicString(title.text, fields)
        else:
            titleCode = '"%s"' % title.text
    else:
        titleCode = '""'
    
    ctx['classTitle'] = titleCode


def parseToString(d, className, fields, ctx):
    xmlToString = d.find('toString')
    if xmlToString is not None:
        toString = convertDynamicString(xmlToString.text, fields)
    else:
        toString = "new QString('%s')" % className

    ctx['toString'] = toString


def convertDynamicString(text, fields):
    text = text.replace("QString", "new QString")
    text = text.replace("formatStrings::", "FormatStrings.")
    text = re.sub("tr\([^\(\)]+\)|tr\([^\(\)]*\([^\(\)]*\)[^\(\)]*\)", "new QString(\g<0>)", text)

    for f in fields:
        text = re.sub('(?<=[^\w\.])%s(?=\W)' % f, 'this.%s' % f, ' %s ' % text)

    text = text.strip();

    if text.endswith(")"):
        text += ".toString()"
    return text

def readXml(xmlFilename):
    tree = ElementTree()
    try:
        tree.parse(xmlFilename)
    except IOError:
        __dir__ = os.path.dirname(os.path.abspath(__file__))
        filepath = os.path.join(__dir__, xmlFilename)
        tree.parse(filepath)

    return tree


class XmlType(object):

    def __init__(self, directory, name, size):
        self.directory = directory
        self.name = name
        self.size = size


def parseTypeSizes(xmlTree):
    typesMap = {
        'TimeReal' : XmlType('DataTypes', 'TimeReal', 4),
        'Timespan' : XmlType('DataTypes', 'Timespan', 8),
        'ActivityChangeInfo' : XmlType('DataTypes', 'ActivityChangeInfo', 2)
    }

    for j in range(3):
        haveSizes = True
        for block in xmlTree.findall('DataType'):
            name = block.get('name')
            if name in typesMap:
                continue

            try:
                print(name)
                size = 0
                for elem in block.find('content'):
                    l = elem.get('length')
                    if l:
                        size += int(l)
                    elif elem.tag in typesMap:
                        size += typesMap[elem.tag].size
                    else:
                        raise StopIteration()
                typesMap[name] = XmlType('DataTypes', name, size)
            except StopIteration:
                haveSizes = False
                continue
    print(typesMap.keys())
    if not haveSizes:
        missing = [b.get('name') if b.get('name') not in typesMap else "" for b in xmlTree.findall('DataType')]
        raise Exception("Could not determine block sizes for " + ', '.join(missing) + ", abandoning")
        
    return typesMap


def writeIfDifferent(filename, newContent):
    try:
        f = open(filename, 'r')
        content = f.read()
        f.close()
    except IOError:
        content = ''
        pass
    if content != newContent:
        f = open(filename, 'w')
        f.write(newContent)
        f.close()
        print(filename)


def lcfirst(a):
    return a[0].lower() + a[1:]


def writeCodeFile(name, directory, classCode):

    codeFile = """\
// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class

%(classCode)s
""" % {
    "classCode": classCode
}

    filepath = os.path.join(APP_ROOT, 'src', directory, name + '.ts')
    if not os.path.exists(os.path.dirname(filepath)):
        os.makedirs(os.path.dirname(filepath))

    writeIfDifferent(filepath, codeFile)



hasToString = set(['TimeReal', 'Timespan', 'RawData', 'LargeNumber'])
#for block in tree.findall('DataType'):
    #if block.find('toString') is not None:
        #hasToString.add(block.get('name'))
#print hasToString



if __name__ == '__main__':
    main()

