
import * as fs from 'fs';

import Block from 'DataTypes/Block';
import {blockFactory} from "blockFactory";
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import Reporter from 'Reporter/Reporter';
import Converter from 'utils/Converter';

export default class EsmFile {

    fileData: ArrayBuffer;
    blocks: Block[];

    constructor(data: ArrayBuffer) {
        this.fileData = data;
        this.blocks = [];
    }

    static parseData(data: ArrayBuffer): EsmFile {
        let block: TopLevelBlock;
        let pos = 0;

        let ef = new EsmFile(data);

        while(pos < data.byteLength) {
            block = blockFactory(data, pos);
            pos += block.size()
            
            ef.blocks.push(block);

            
            console.log("card type: " + Converter.dec2hexString(block.getBlockType()));
            console.log("card size: " + block.size());
            //break;
        }

        return ef;
    }

    printOn(report: Reporter) {
        this.blocks.forEach((b: Block) => {
            report.writeBlock(b);
        })
    }

    suggestTitle(): string {
        return ""
    }
}





