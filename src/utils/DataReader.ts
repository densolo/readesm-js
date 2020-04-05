

export default class DataReader {

    static readInt8(data: ArrayBuffer, pos: number) {
        return new DataView(data.slice(pos, pos + 1)).getInt8(0)
    }

    static readInt16(data: ArrayBuffer, pos: number) {
        return new DataView(data.slice(pos, pos + 2)).getInt16(0)
    }
}