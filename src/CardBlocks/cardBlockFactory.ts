
import DataReader from 'utils/DataReader';    
import CardBlock from 'CardBlocks/CardBlock';
import Converter from 'utils/Converter';
import FormatStrings from 'utils/FormatStrings';

import DriverCardApplicationIdentification from 'CardBlocks/DriverCardApplicationIdentification';
import LastCardDownload from 'CardBlocks/LastCardDownload';
import CardDrivingLicenseInformation from 'CardBlocks/CardDrivingLicenseInformation';
import Identification from 'CardBlocks/Identification';
import CardCurrentUse from 'CardBlocks/CardCurrentUse';
import CardChipIdentification from 'CardBlocks/CardChipIdentification';
import CardIccIdentification from 'CardBlocks/CardIccIdentification';
import CardControlActivityDataRecord from 'CardBlocks/CardControlActivityDataRecord';
import CardDriverActivity from 'CardBlocks/CardDriverActivity';
import CardEventData from 'CardBlocks/CardEventData';
import CardFaultData from 'CardBlocks/CardFaultData';
import SpecificConditions from 'CardBlocks/SpecificConditions';
import MemberStateCertificate from 'CardBlocks/MemberStateCertificate';
import CardCertificate from 'CardBlocks/CardCertificate';
import CardPlaceDailyWorkPeriod from 'CardBlocks/CardPlaceDailyWorkPeriod';
import CardVehiclesUsed from 'CardBlocks/CardVehiclesUsed';
import CardDownloadWorkshop from 'CardBlocks/CardDownloadWorkshop'
import Calibration from 'CardBlocks/Calibration';
import BlockParseError from 'DataTypes/BlockParseError';


export function cardBlockFactory(data: ArrayBuffer, pos: number) {
    let blockType = DataReader.readUint16(data, pos);
    //console.log("cardBlockFactory: " + Converter.dec2hexString(blockType));
            
    data = data.slice(pos);

    if (data.byteLength < 5) {
        return new CardBlock(data);
    }

    switch (blockType) {
		case DriverCardApplicationIdentification.BLOCK_TYPE: {
            let rv =  new DriverCardApplicationIdentification(data);
            console.log(`Parsed DriverCardApplicationIdentification.typeOfTachographCardId: '${FormatStrings.equipmentType(rv.typeOfTachographCardId)}'`);
            return rv;
        }
		case LastCardDownload.BLOCK_TYPE: {
            return new LastCardDownload(data);
        }
		case CardDrivingLicenseInformation.BLOCK_TYPE: {
            return new CardDrivingLicenseInformation(data);
        }
		case Identification.BLOCK_TYPE: {
            return new Identification(data);
        }
		case CardCurrentUse.BLOCK_TYPE: {
            return new CardCurrentUse(data);
        }
		case CardChipIdentification.BLOCK_TYPE: {
            return new CardChipIdentification(data);
        }
		case CardIccIdentification.BLOCK_TYPE: {
            return new CardIccIdentification(data);
        }
		case CardControlActivityDataRecord.BLOCK_TYPE: {
            return new CardControlActivityDataRecord(data);
        }
		case CardDriverActivity.BLOCK_TYPE: {
            return new CardDriverActivity(data);
        }
		case CardEventData.BLOCK_TYPE: {
            return new CardEventData(data);
        }
		case CardFaultData.BLOCK_TYPE: {
            return new CardFaultData(data);
        }
		case SpecificConditions.BLOCK_TYPE: {
            return new SpecificConditions(data);
        }
		case MemberStateCertificate.BLOCK_TYPE: {
            return new MemberStateCertificate(data);
        }
		case CardCertificate.BLOCK_TYPE: {
            return new CardCertificate(data);
        }
		case CardPlaceDailyWorkPeriod.BLOCK_TYPE: {
            return new CardPlaceDailyWorkPeriod(data);
        }
        case CardVehiclesUsed.BLOCK_TYPE: {
            return new CardVehiclesUsed(data);
        }
        case CardDownloadWorkshop.BLOCK_TYPE: {
            return new CardDownloadWorkshop(data);
        }
        case Calibration.BLOCK_TYPE: {
            return new Calibration(data);
        }
        default: {
            console.warn("Unknown card block type: " + Converter.dec2hexString(blockType));
            return new BlockParseError("Unknown card block type: " + Converter.dec2hexString(blockType));
        }
    }
}
