
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import {cardBlockFactory} from 'CardBlocks/cardBlockFactory';
import {vuBlockFactory} from 'VuBlocks/vuBlockFactory';


export function blockFactory(data, pos): TopLevelBlock {
    if (data[pos] == 0x76) {
        return vuBlockFactory(data, pos);
    } else {
        return cardBlockFactory(data, pos);
    }
}

