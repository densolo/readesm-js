
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import {cardBlockFactory} from 'CardBlocks/cardBlockFactory';
import {vuBlockFactory} from 'VuBlocks/vuBlockFactory';
import DataReader from "../utils/DataReader";

export function blockFactory(data, pos): TopLevelBlock {
    if (DataReader.readUint8(data, pos) == 0x76) {
        return vuBlockFactory(data, pos);
    } else {
        return cardBlockFactory(data, pos);
    }
}

