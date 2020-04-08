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
    rawClassName = 'Raw' + className if d.get('hasredefined') else className

    title = d.find('title')

    ctx = {		
        'offset': 0,	
        'className': rawClassName,
        'classTitle': title.text if title else '',
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
        parseField(className, xmlField, sz, typesMap, ctx)

    parseToString(d, className, fields, ctx)

    if d.tag != 'CardBlock':
        ctx['classSize'] = ctx['offset']  # + extraoffset for Subblocks
    
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


def parseField(className, xmlField, fieldSize, typesMap, ctx):
    name = xmlField.get('name')
    
    if xmlField.tag == 'int':
        ctx['fieldDefinitions'] += '\n    %s: number;' % name
        ctx['fieldInitializations'] += '\n        this.%s = DataReader.readUint%s(data, %s);' % (
            name, fieldSize*8, ctx['offset']
        )
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s);' % (name, name)
        
    elif xmlField.tag == 'RawData':
        if fieldSize == 0:
            fileSizeExp = 'dataBlockSize() - (%s)' % ctx['offset']
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
        ctx['printOn'] += '\n        report.tagValuePair(tr("%s"), this.%s;' % (name, name)

    elif xmlField.tag in typesMap:
        t = typesMap[xmlField.tag]
        ctx['subtypeImports'] += "\nimport %s from '%s/%s';" % (t.name, t.directory, t.name)
        ctx['fieldDefinitions'] += '\n    %s: %s;' % (name, t.name)
        ctx['fieldInitializations'] += '\n        this.%s = new %s(data.slice(%s))' % (
            name, t.name, ctx['offset']
        )
        ctx['printOn'] += '\n        report.writeBlock(this.%s, tr("%s"));' % (name, name)

    elif xmlField.tag in ('LargeNumber',):
        typeName = xmlField.tag
        ctx['subtypeImports'] += "\nimport %s from 'DataTypes/%s';" % (typeName, typeName)
        ctx['fieldDefinitions'] += '\n    %s: %s;' % (name, typeName)
        ctx['fieldInitializations'] += '\n        this.%s = new %s(data.slice(%s), %s)' % (
            name, typeName, ctx['offset'], fieldSize
        )

    elif xmlField.tag == 'Subblocks':
        name = lcfirst(xmlField.get('type'))
        typeName = xmlField.get('type')
        ctx['subtypeImports'] += "\nimport %s from 'DataTypes/%s';" % (name, typeName)
        ctx['fieldDefinitions'] += '\n    %s: %s[];' % (name, typeName)

        # TODO read array of subblocks

    else:
        raise ValueError("Unknown field type %s of tag %s.%s" % (xmlField.tag, className, name))

    ctx['offset'] += fieldSize


def parseToString(d, className, fields, ctx):
    xmlToString = d.find('toString')
    if xmlToString is not None:
        toString = xmlToString.text
        toString = toString.replace("QString", "new QString")
        toString = toString.replace("formatStrings::", "FormatStrings.")
    else:
        toString = "new QString('%s')" % className

    for f in fields:
        toString = toString.replace(f, 'this.%s' % f)

    ctx['toString'] = toString

    
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

    autoGenWarning = """
// This file was AUTO-GENERATED.
// Make changes in the generator script generate.py,
// the data definitions in DataDefinitions.xml
// or derive a class
"""	

    codeFile = """

%(autoGenWarning)s

%(classCode)s

""" % {
    "autoGenWarning": autoGenWarning,
    "classCode": classCode
}

    filepath = os.path.join(APP_ROOT, 'src/generated', directory + '/' + name + '.ts')
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

