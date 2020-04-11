
import * as fs from 'fs';

import Block from 'DataTypes/Block';
import {blockFactory} from "VuBlocks/blockFactory";
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import Reporter from 'Reporter/Reporter';
import Converter from 'utils/Converter';
import Identification from 'CardBlocks/Identification';
import CardDriverActivity from 'CardBlocks/CardDriverActivity';
import VuOverview from 'VuBlocks/VuOverview';
import QString from 'utils/QString';
import {tr} from 'utils/Translation';
import BlockParseError from 'DataTypes/BlockParseError';


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
        let errorCounter = 0;

        try {
            while(pos < data.byteLength) {
                block = blockFactory(data, pos);
                pos += block.size()            
                ef.blocks.push(block);

                // console.log("card size: " + block.size());

                if (block instanceof BlockParseError) {
                    errorCounter += 1
                    if (errorCounter > 5) {
                        throw new Error("Too many parse errors");
                    }
                } else {
                    errorCounter = 0;
                }
            }
        } catch (err) {
            console.error("Parse error: " + err.toString());
            console.trace();
            ef.blocks.push(new BlockParseError(err));
        }

        return ef;
    }

    printOn(report: Reporter) {
        report.setTitle(this.suggestTitle());
        this.blocks.forEach((b: Block) => {
            report.writeBlock(b);
        })
    }

    suggestTitle(): string {
        let rv = "Esm data";

        let ov = EsmFile.findTypeInVector<VuOverview>(VuOverview, this.blocks);
        let id = EsmFile.findTypeInVector<Identification>(Identification, this.blocks);
        let act = EsmFile.findTypeInVector<CardDriverActivity>(CardDriverActivity, this.blocks);

        let dateSuggestion: string;

        if (ov) {
            rv = ov.vehicleRegistrationIdentification.vehicleRegistrationNumber;
            dateSuggestion = ov.currentDateTime.toString();
        }

        if (id) {
            rv = id.cardHolderName.toString();
        }

        if (act) {
            if (act.cardActivityDailyRecords.numberOfBlocks() > 1) {
                dateSuggestion = new QString(tr("%1 to %2"))
                    .arg(act.cardActivityDailyRecords.get(0).activityRecordDate.toString())
                    .arg(act.cardActivityDailyRecords.get(act.cardActivityDailyRecords.numberOfBlocks() - 1).activityRecordDate.toString())
                    .toString();
            }
        }

        if (dateSuggestion) {
            rv += " " + dateSuggestion;
        }

        return rv
    }

    static findTypeInVector<T>(blockType: typeof Block, blocks: Block[]): T {
        let rv: T;
        blocks.forEach((it) => {
            if (it instanceof blockType) {
                rv = it as any;
            }
        });
        return rv;
    }
}





