
export default class Converter {
    
    static dec2hexString(dec) {
        // source: https://gist.github.com/agirorn/0e740d012b620968225de58859ccef5c
        return '0x' + (dec + 0x10000).toString(16).substr(-4);
    }

    static concatArrays(a1: ArrayBuffer|Array<number>, a2: ArrayBuffer|Array<number>) {
        let b1 = new Uint8Array(a1)
        let b2 = new Uint8Array(a2)
        let b = new Uint8Array(b1.byteLength + b2.byteLength);
        
        b.set(b1, 0);
        b.set(b2, b1.byteLength);
        return b.buffer;
    }

    static bcdbyte(c: any) {
        let n = 0;
        let m = 1;
        n += (c & 0x0F) * m;
        n += ((c>>4) & 0x0F) * m * 10;
        return n;
    }
}
