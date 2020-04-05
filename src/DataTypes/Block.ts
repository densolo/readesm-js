
import Reporter from 'Reporter/Reporter';


export default class Block {
 
    size(): number {
        return 0;
    }

    className(): string {
        return "";
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