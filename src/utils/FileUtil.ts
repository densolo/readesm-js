
import * as fs from 'fs';


export default class FileUtil {
 
    static readFile(path: string): string {
        let binary = fs.readFileSync(path);
        return binary.toString();
    }

    static readFileData(path: string): ArrayBuffer {
        let binary = fs.readFileSync(path);
        return binary.buffer.slice(binary.byteOffset, binary.byteOffset + binary.byteLength);
    }

    static writeFile(path: string, data: string) {
        fs.writeFileSync(path, data);
    }
}
