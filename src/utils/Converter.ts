

export default class Converter {
    
    static dec2hexString(dec) {
        // source: https://gist.github.com/agirorn/0e740d012b620968225de58859ccef5c
        return '0x' + (dec + 0x10000).toString(16).substr(-4).toUpperCase();
    }
}