
import Converter from 'utils/Converter';
import RawData from 'DataTypes/RawData';
import Block from 'DataTypes/Block';
import DataType from 'DataTypes/DataType';
import Subblocks from 'DataTypes/Subblocks';


export default class DataReader {

    static readUint8(data: ArrayBuffer, pos: number) {
        return new DataView(data.slice(pos, pos + 1)).getUint8(0)
    }

    static readUint16(data: ArrayBuffer, pos: number) {
        return new DataView(data.slice(pos, pos + 2)).getUint16(0)
    }

    static readUint24(data: ArrayBuffer, pos: number) {
        return new DataView(Converter.concatArrays([0], data.slice(pos, pos + 3))).getUint32(0)
    }

    static readUint32(data: ArrayBuffer, pos: number) {
        return new DataView(data.slice(pos, pos + 4)).getUint32(0)
    }

    static readBCD16(data: ArrayBuffer, pos: number) {
        let start = new Uint8Array(data.slice(pos, pos+2));
        let rv = (start[0] >> 4) * 1000 + (start[0] & 0x0F) * 100 + (start[1] >> 4) * 10 + (start[1] & 0x0F);
        // console.log("readBCD16: " + RawData.toHexString(start) + " -> " + rv + " (" + DataReader.readUint16(data, pos) + ")");
        return rv;
    }

    static readRawData(data: ArrayBuffer, pos: number, length: number) {
        return new RawData(data.slice(pos), length);
    }

    static readString(data: ArrayBuffer, pos: number, length: number) {
        let rd = new RawData(data.slice(pos), length);
        let rv = rd.toTextString();
        rv = rv.replace(/\s+$/g, '');
        return rv;
    }

    static readCodePageString(data: ArrayBuffer, pos: number, length: number) {
        let stringData = new Uint8Array(data.slice(pos, pos + length));
        if (!DataReader.checkString(stringData.slice(1, -1))) {
            return `Not a string: ${RawData.toHexString(stringData)}`;
        }

        if (DataReader.isISO8859CodePageNumber(stringData[0])) {
            // add support for codecs
        } else {
            console.log(`${stringData[0]} is not a code page`);
        }

        let rv = String.fromCharCode.apply(null, stringData.slice(1, -1));
        rv = rv.replace(/\0/g, ' ');
        rv = rv.replace(/\s+$/g, '');
        return rv;
    }

    static isISO8859CodePageNumber(number: number): boolean {
        return number <= 16 && number != 0 && number != 12;
    }

    static checkString(str: Uint8Array) {
        for (let j = 0; j < str.length; ++j) {
            if (str[j] > 0x20 && str[j] != 0xFF && String.fromCharCode(str[j]) != '?') {
                return true;
            }
        }
        return false;
    }

    static readSubblocksByCount<T extends DataType>(blockType: {build(...args: any[]): T}, data: ArrayBuffer, pos: number, count: number): Subblocks<T> {
        let blocks: Subblocks<T> = new Subblocks();

        for(let i = 0; i < count; i++) {
            let b = blockType.build(data.slice(pos));
            blocks.append(b);
            pos += b.size();
        }

        return blocks;
    }

    static readSubblocksByLength<T extends DataType>(blockType: {name: string; build(...args: any[]): T}, data: ArrayBuffer, pos: number, length: number): Subblocks<T> {
        let i = 0;
        let blocks: Subblocks<T> = new Subblocks();

        while (i < length) {
            //console.log(`Read subblock ${blockType.name} at ${i} of ${length}`);

            let b = blockType.build(data.slice(pos+i));
            blocks.append(b);
            i += b.size();
        }

        return blocks;
    }
}
