
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

    static readRawData(data: ArrayBuffer, pos: number, length: number) {
        return new RawData(data.slice(pos), length);
    }

    static readString(data: ArrayBuffer, pos: number, length: number) {
        let rd = new RawData(data.slice(pos), length);
        return rd.toTextString();
    }

    static readCodePageString(data: ArrayBuffer, pos: number, length: number) {
        // TODO: migrate codepageStringCombination from readTypes.cpp 
        return this.readString(data, pos, length);
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
