
import DataReader from 'utils/DataReader';    
import CardIccIdentification from 'CardBlocks/CardIccIdentification';
import CardBlock from 'CardBlocks/CardBlock';
import TopLevelBlock from 'DataTypes/TopLevelBlock';
import VuBlock from 'VuBlocks/VuBlock';
import Converter from 'utils/Converter';


export function blockFactory(data, pos): TopLevelBlock {
    if (data[pos] == 0x76) {
        return vuBlockFactory(data, pos);
    } else {
        return cardBlockFactory(data, pos);
    }
}

function vuBlockFactory(data, pos) {
    var blockType = DataReader.readUint8(data, pos + 1);
    data = data.slice(pos);
    
    switch (blockType) {
        default: {
            console.log("Unknown vu block type: " + Converter.dec2hexString(blockType));
            return new VuBlock(data);
        }
    }
}

function cardBlockFactory(data, pos) {
    let blockType = DataReader.readUint16(data, pos);
    data = data.slice(pos);

    switch (blockType) {
        case CardIccIdentification.BLOCK_TYPE: {
            return new CardIccIdentification(data)
        }
        default: {
            console.log("Unknown card block type: " + Converter.dec2hexString(blockType));
            return new CardBlock(data);
        }
    }
}
