
import Converter from 'utils/Converter';
import RawData from 'DataTypes/RawData';


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
}
