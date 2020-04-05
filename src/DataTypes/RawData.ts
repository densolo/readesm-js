
export default class RawData {

    data: ArrayBuffer;

    constructor(data: ArrayBuffer, length: number) {
        this.data = data.slice(0, length);
    }

    toString() {
        return this.data.toString();
    }
}
