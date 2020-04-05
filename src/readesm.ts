
import * as fs from 'fs';
import {blockFactory} from "./blockFactory";
import TopLevelBlock from './TopLevelBlock';
import Converter from './utils/Converter';


let binary = fs.readFileSync('data/Input.ddd');

let data = binary.buffer.slice(binary.byteOffset, binary.byteOffset + binary.byteLength);
let block: TopLevelBlock;
let pos = 0;

while(pos < data.byteLength) {
    block = blockFactory(data, pos);
    pos += block.size()
    
    console.log("card type: " + Converter.dec2hexString(block.getBlockType()));
    console.log("card size: " + block.size());
}



//console.log("Done: " + binary.slice()[1]);

