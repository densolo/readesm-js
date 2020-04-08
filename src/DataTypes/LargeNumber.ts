

export default class LargeNumber {

    data: ArrayBuffer;

    constructor(data: ArrayBuffer, length: number) {
        this.data = data.slice(0, length);
    }

    className() {
        return "LargeNumber";
    }

    size() {
        return this.data.byteLength;
    }
}