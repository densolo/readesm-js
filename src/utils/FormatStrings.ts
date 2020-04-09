
import {tr} from 'utils/Translation';
import QString from 'utils/QString';

export default class FormatStrings {

    static eventType(value: number): string {
        return "" + value;
    }

    static eventRecordPurpose(value: number): string {
        return "" + value;
    }

    static nationNumeric(value: number): string {
        return "" + value;
    }

    static specificCondition(value: number): string {
        return "" + value;
    }

    static calibrationPurpose(value: number): string {
        return "" + value;
    }

    static controlType(value: number): string {
        return "" + value;
    }

    static equipmentType(value: number): string {
        let codes = [
            "Reserved",
            "Driver Card",
            "Workshop Card",
            "Control Card",
            "Company Card",
            "Manufacturing Card",
            "Vehicle Unit",
            "Motion Sensor"
        ];

        let rv: string;
        if (value >= 0 && value <= 7) {
            rv = tr(codes[value]);
        } else {
            rv = new QString(tr("RFU: %1")).arg(value).toString();
        }
        return rv;
    }

    static dailyWorkPeriod(value: number): string {
        return "" + value;
    }

    static regionNumeric(value: number): string {
        return "" + value;
    }
    
    static previous2(now: string, past: string): string {
        return new QString(tr("%1 (formerly %2)"))
            .arg(now).arg(past).toString();
    }

    static previous3(now: string, past: string, ancientpast: string) {
        return new QString(tr("%1 (formerly %2 and before that %3)"))
            .arg(now).arg(past).arg(ancientpast).toString();
    }

    static previous4(now: string, past: string, ancientpast: string, prehistory: string) {
        return new QString(tr("%1 (formerly %2, before that %3 and before that %4)"))
            .arg(now).arg(past).arg(ancientpast).arg(prehistory).toString();
    }

    static manufacturerCode(code: number): string {
        switch (code) {
            case 0x00: return tr("No information available");
            case 0x01: return tr("Reserved value");
            case 0x10: return "Actia S.A.";
            case 0x11: return "Security Printing and Systems Ltd.";
            case 0x12: return FormatStrings.previous2("Austria Card Plastikkarten und Ausweissysteme GmbH", "Austria Card");
            case 0x13: return "Agencija za komercijalnu djelatnost d.o.o (AKD)";
            case 0x15: return "ASELSAN";
            case 0x17: return "Real Casa de la Moneda";
            case 0x18: return "BARBÉ S.R.L.";
            case 0x20: return "CETIS d.d.";
            case 0x21: return "certSIGN";
            case 0x22: return "RUE Cryptotech";
            case 0x23: return "Centr Modernizatcii Transporta OOO (CMT - LLC)";
            case 0x24: return "Pars Ar-Ge Ltd";
            case 0x28: return "Datakom";
            case 0x29: return "DVLA";
            case 0x30: return FormatStrings.previous4("IDEMIA The Netherlands BV", "Morpho BV", "Sdu Identification B.V.", "Enschedé/Sdu B.V.");
            case 0x32: return FormatStrings.previous2("intellic GmbH", "EFKON AG.");
            case 0x38: return "Fábrica Nacional de Moneda y Timbre";
            case 0x39: return "First Print Yard";
            case 0x40: return "Giesecke & Devrient GmbH";
            case 0x43: return "Giesecke & Devrient GB Ltd.";
            case 0x44: return "Giesecke & Devrient sa/nv";
            case 0x45: return "GrafoCARD";
            case 0x48: return FormatStrings.previous2("Hungarian Banknote Printing Co. Ltd.", "PJRT");
            case 0x50: return "Imprimerie Nationale";
            case 0x51: return "Imprensa Nacional-Casa da Moeda, SA";
            case 0x52: return "InfoCamere S.C.p.A";
            case 0x61: return "KazTACHOnet LLP";
            case 0x68: return "LESIKAR a.s.";
            case 0x69: return "LEDA-SL";
            case 0x78: return "NAP automotive Produkte GmbH";
            case 0x81: return FormatStrings.previous3("Morpho e-documents", "Sagem Orga", "ORGA Kartensysteme GmbH");
            case 0x82: return "ORGA Zelenograd ZAO";
            case 0x84: return "ORGA Kartensysteme GmbH";
            case 0x88: return FormatStrings.previous2("Asseco Czech Republic a.s.", "PVT a.s.");
            case 0x89: return "Polska Wytwórnia Papierów Wartosciowych S.A. - PWPW S.A.";
            case 0x8A: return "Papiery Powlekane Pasaco Sp. z o.o.";
            case 0x98: return "TahoNetSoft";
            case 0xA1: return FormatStrings.previous4("Continental Automotive GmbH", "Siemens AG", "Siemens VDO Automotive", "Siemens Automotive");
            case 0xA2: return "Stoneridge Electronics AB";
            case 0xA3: return FormatStrings.previous2("Gemalto", "Schlumberger SEMA, Axalto");
            case 0xA4: return "3M Security Printing and Systems Ltd.";
            case 0xA5: return "STMicroelectronics - Incard Division";
            case 0xA6: return "STÁTNÍ TISKÁRNA CENIN, státní podnik";
            case 0xAB: return "T-Systems International GmbH";
            case 0xAC: return FormatStrings.previous2("Gemalto AG", "Trüb AG");
            case 0xAD: return "Trüb Baltic AS";
            case 0xAE: return "TEMPEST a.s.";
            case 0xAF: return "Trueb - DEMAX PLC";
            case 0xB0: return "TAYROL LIMITED";
            case 0xB1: return "UŽDAROJI AKCINĖ BENDROVĖ \"LODVILA\"";
            case 0xD8: return "Union of Chambers and Commodity Exchanges of Turkey - TOBB";
            case 0xE0: return "Turker Roll Paper Trade";
        }
        return new QString(tr("Unknown Manufacturer %1 or equipment not type approved")).arg(code).toString();
    }
}
