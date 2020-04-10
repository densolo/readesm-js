
import Reporter from 'Reporter/Reporter';


export default class Block {

    dataStart: ArrayBuffer;

    constructor(data?: ArrayBuffer) {
        this.dataStart = data;
    }

    static build<T>(data?: ArrayBuffer): T {
        let nm = {'class': this};
        return new nm['class'](data) as any;
    }
 
    size(): number {
        return 0;
    }

    className(): string {
        return this.constructor.name;
    }

    title(): string {
        return "";
    }

    toString(): string {
        return "";
    }

    printOn(o: Reporter): void {
        
    }
}
