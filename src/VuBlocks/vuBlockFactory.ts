
import DataReader from 'utils/DataReader';
import VuBlock from 'VuBlocks/VuBlock';
import Converter from 'utils/Converter';

import VuOverview from 'VuBlocks/VuOverview';
import VuTechnical from 'VuBlocks/VuTechnical';
import VuCardData from 'VuBlocks/VuCardData';
import Block11 from 'VuBlocks/Block11';
import Block13 from 'VuBlocks/Block13';
import Block14 from 'VuBlocks/Block14';
import VuEventsFaults from 'VuBlocks/VuEventsFaults';
import VuActivities from 'VuBlocks/VuActivities';
import VuDetailedSpeedData from 'VuBlocks/VuDetailedSpeedData';
import BlockParseError from 'DataTypes/BlockParseError';


export function vuBlockFactory(data, pos) {
    const blockType = DataReader.readUint8(data, pos + 1);
    //console.log("vuBlockFactory: " + Converter.dec2hexString(blockType));
    data = data.slice(pos);

    if (data.byteLength < 2 || DataReader.readUint8(data, 0) != 0x76) {
        return new VuBlock(data);
    }

    switch (blockType) {
        case VuOverview.BLOCK_TYPE: {
            return new VuOverview(data);
        }
		case VuTechnical.BLOCK_TYPE: {
            return new VuTechnical(data);
        }
		case VuCardData.BLOCK_TYPE: {
            return new VuCardData(data);
        }
		case Block11.BLOCK_TYPE: {
            return new Block11(data);
        }
		case Block13.BLOCK_TYPE: {
            return new Block13(data);
        }
		case Block14.BLOCK_TYPE: {
            return new Block14(data);
        }
		case VuEventsFaults.BLOCK_TYPE: {
            return new VuEventsFaults(data);
        }
		case VuActivities.BLOCK_TYPE: {
            return new VuActivities(data);
        }
        case VuDetailedSpeedData.BLOCK_TYPE: {
            return new VuDetailedSpeedData(data);
        }
        default: {
            console.log("Unknown vu block type: " + Converter.dec2hexString(blockType));
            return new BlockParseError("Unknown vu block type: " + Converter.dec2hexString(blockType));
        }
    }
}
