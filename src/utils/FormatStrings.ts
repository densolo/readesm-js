
import {tr} from 'utils/Translation';
import QString from 'utils/QString';

function QT_TR_NOOP(x: any) {
    return x;
}

export default class FormatStrings {

    static eventType(etype: number): string {
        let major = etype >> 4;
        let minor = etype & 0xF;
        
        let rv = `${Number(etype)} - `;
    
        if (major == 0) {
            rv += tr("General events: ");
            let generalEvents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Insertion of a non-valid card"),
                QT_TR_NOOP("Card conflict"),
                QT_TR_NOOP("Time overlap"),
                QT_TR_NOOP("Driving without an appropriate card"),
                QT_TR_NOOP("Card insertion while driving"),
                QT_TR_NOOP("Last card session not correctly closed"),
                QT_TR_NOOP("Over speeding"),
                QT_TR_NOOP("Power supply interruption"),
                QT_TR_NOOP("Motion data error")
            ];
            if (minor <= 0x9) {
                rv += tr(generalEvents[minor]);
            } else {
                rv += tr("RFU");
            }
        } else if (major == 1) {
            rv += tr("Vehicle unit related security breach attempt events: ");
            let sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Motion sensor authentication failure"),
                QT_TR_NOOP("Tachograph card authentication failure"),
                QT_TR_NOOP("Unauthorised change of motion sensor"),
                QT_TR_NOOP("Card data input integrity error"),
                QT_TR_NOOP("Stored user data integrity error"),
                QT_TR_NOOP("Internal data transfer error"),
                QT_TR_NOOP("Unauthorised case opening"),
                QT_TR_NOOP("Hardware sabotage")
            ];
            if (minor <= 0x8) {
                rv += tr(sevents[minor]);
            } else {
                rv += tr("RFU");
            }
        } else if (major == 2) {
            rv += tr("Sensor related security breach attempt events: ");
            let sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("Authentication failure"),
                QT_TR_NOOP("Stored data integrity error"),
                QT_TR_NOOP("Internal data transfer error"),
                QT_TR_NOOP("Unauthorised case opening"),
                QT_TR_NOOP("Hardware sabotage") 
            ];
            if (minor <= 0x5) {
                rv += tr(sevents[minor]);
            } else {
                rv += tr("RFU");
            }
        } else if (major == 3) {
            rv += tr("Recording equipment faults: ");
            let sevents = [
                QT_TR_NOOP("No further details"),
                QT_TR_NOOP("VU internal fault"),
                QT_TR_NOOP("Printer fault"),
                QT_TR_NOOP("Display fault"),
                QT_TR_NOOP("Downloading fault"),
                QT_TR_NOOP("Sensor fault")
            ];
            if (minor <= 0x5) {
                rv += tr(sevents[minor]);
            } else {
                rv += tr("RFU");
            }
        } else if (major == 4) {
            rv += tr("Card faults: ");
            let sevents = [
                "No further details" 
            ];
            if (minor <= 0x1) {
                rv += tr(sevents[minor]);
            } else {
                rv += tr("RFU");
            }
        } else if (major >= 5 && major <= 7) {
            rv += tr("RFU groups");
        } else if (major >= 8 && major <= 0xF) {
            rv += tr("Manufacturer specific");
        } else {
            rv += tr("(error: blame programmer)");
        }

        return rv;
    }

    static eventRecordPurpose(etype: number): string {
        let recordingPurposes = [
            QT_TR_NOOP("one of the 10 most recent (or last) events or faults"),
            QT_TR_NOOP("the longest event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("one of the 5 longest events over the last 365 days"),
            QT_TR_NOOP("the last event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("the most serious event for one of the last 10 days of occurrence"),
            QT_TR_NOOP("one of the 5 most serious events over the last 365 days"),
            QT_TR_NOOP("the first event or fault having occurred after the last calibration"),
            QT_TR_NOOP("an active/on-going event or fault")
        ];
        if (etype <= 7) {
            return tr(recordingPurposes[etype]);
        } else if (8 <= etype && etype <= 0x7F) {
            return tr("RFU");
        } else if (0x80 <= etype && etype <= 0xFF) {
            return tr("Manufacturer specific");
        } else {
            return tr("(error: blame programmer)");
        }
    }

    static nationNumeric(country: number): string {
        let countries = [
            QT_TR_NOOP("No information available"),
            QT_TR_NOOP("Austria"),
            QT_TR_NOOP("Albania"),
            QT_TR_NOOP("Andorra"),
            QT_TR_NOOP("Armenia"),
            QT_TR_NOOP("Azerbaijan"),
            QT_TR_NOOP("Belgium"),
            QT_TR_NOOP("Bulgaria"),
            QT_TR_NOOP("Bosnia and Herzegovina"),
            QT_TR_NOOP("Belarus"),
            QT_TR_NOOP("Switzerland"),
            QT_TR_NOOP("Cyprus"),
            QT_TR_NOOP("Czech Republic"),
            QT_TR_NOOP("Germany"),
            QT_TR_NOOP("Denmark"),
            QT_TR_NOOP("Spain"),
            QT_TR_NOOP("Estonia"),
            QT_TR_NOOP("France"),
            QT_TR_NOOP("Finland"),
            QT_TR_NOOP("Liechtenstein"),
            QT_TR_NOOP("Faeroe Islands"),
            QT_TR_NOOP("United Kingdom"),
            QT_TR_NOOP("Georgia"),
            QT_TR_NOOP("Greece"),
            QT_TR_NOOP("Hungary"),
            QT_TR_NOOP("Croatia"),
            QT_TR_NOOP("Italy"),
            QT_TR_NOOP("Ireland"),
            QT_TR_NOOP("Iceland"),
            QT_TR_NOOP("Kazakhstan"),
            QT_TR_NOOP("Luxembourg"),
            QT_TR_NOOP("Lithuania"),
            QT_TR_NOOP("Latvia"),
            QT_TR_NOOP("Malta"),
            QT_TR_NOOP("Monaco"),
            QT_TR_NOOP("Republic of Moldova"),
            QT_TR_NOOP("Macedonia"),
            QT_TR_NOOP("Norway"),
            QT_TR_NOOP("Netherlands"),
            QT_TR_NOOP("Portugal"),
            QT_TR_NOOP("Poland"),
            QT_TR_NOOP("Romania"),
            QT_TR_NOOP("San Marino"),
            QT_TR_NOOP("Russian Federation"),
            QT_TR_NOOP("Sweden"),
            QT_TR_NOOP("Slovakia"),
            QT_TR_NOOP("Slovenia"),
            QT_TR_NOOP("Turkmenistan"),
            QT_TR_NOOP("Turkey"),
            QT_TR_NOOP("Ukraine"),
            QT_TR_NOOP("Vatican City"),
            QT_TR_NOOP("Yugoslavia"),
            QT_TR_NOOP("Montenegro"), //new ones only found on https://dtc.jrc.ec.europa.eu/
            QT_TR_NOOP("Serbia"),
            QT_TR_NOOP("Uzbekistan"),
            QT_TR_NOOP("Tajikistan")
        ];
        if (country <= 0x37) {
            return tr(countries[country]);
        }
        if (country <= 0xFC) {
            return new QString(tr("%1 - Reserved for future use"))
                .arg(country).toString();
        }
        if (country == 0xFD) {
            return tr("European Community");
        }
        if (country == 0xFE) {
            return tr("Europe, but not EC and not registered");
        }
        if (country == 0xFF) {
            return tr("outside of Europe, not registered");
        }
        return tr("error in nationNumeric");
    }

    static specificCondition(scond: number): string {
        let specificConditions = [
            QT_TR_NOOP("RFU"),
            QT_TR_NOOP("Out of scope - Begin"),
            QT_TR_NOOP("Out of scope - End"),
            QT_TR_NOOP("Ferry/Train crossing")
        ];
        if (scond <= 0x3) {
            return tr(specificConditions[scond]);
        } else {
            return tr("RFU");
        }
    }

    static calibrationPurpose(cpurp: number): string {
        let cpurps = [
            QT_TR_NOOP("reserved value (should not appear)"),
            QT_TR_NOOP("activation: recording of calibration parameters known, at the moment of the VU activation"),
            QT_TR_NOOP("first installation: first calibration of the VU after its activation"),
            QT_TR_NOOP("installation: first calibration of the VU in the current vehicle"),
            QT_TR_NOOP("periodic inspection")
        ];

        if (cpurp <= 4) {
            return tr(cpurps[cpurp]);
        } else {
            return tr("(not specified)");
        }
    }

    static controlType(ctype: number): string {
        let rv = "";
        if (ctype & (1 << 7)) {
            rv += tr("card downloaded") + ", ";
        }
        if (ctype & (1 << 6)) {
            rv += tr("VU downloaded") + ", ";
        }
        if (ctype & (1 << 5)) {
            rv += tr("printing done") + ", ";
        }
        if (ctype & (1 << 4)) {
            rv += tr("display used") + ", ";
        }
        return rv;
    }

    static equipmentType(value: number): string {
        let codes = [
            QT_TR_NOOP("Reserved"),
            QT_TR_NOOP("Driver Card"),
            QT_TR_NOOP("Workshop Card"),
            QT_TR_NOOP("Control Card"),
            QT_TR_NOOP("Company Card"),
            QT_TR_NOOP("Manufacturing Card"),
            QT_TR_NOOP("Vehicle Unit"),
            QT_TR_NOOP("Motion Sensor")
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
        let vals = [
            QT_TR_NOOP("Begin, related time = card insertion time or time of entry"),
            QT_TR_NOOP("End, related time = card withdrawal time or time of entry"),
            QT_TR_NOOP("Begin, related time manually entered (start time)"),
            QT_TR_NOOP("End, related time manually entered (end of work period)"),
            QT_TR_NOOP("Begin, related time assumed by VU"),
            QT_TR_NOOP("End, related time assumed by VU")
        ];
        if (value <= 5) {
            return tr(vals[value]);
        } else {
            return new QString(tr("(not specified: %1)"))
                .arg(value).toString();
        }
    }

    static regionNumeric(region: number): string {
        let vals = [
            QT_TR_NOOP("No information available"),
            QT_TR_NOOP("Andalucía"),
            QT_TR_NOOP("Aragón"),
            QT_TR_NOOP("Asturias"),
            QT_TR_NOOP("Cantabria"),
            QT_TR_NOOP("Cataluña"),
            QT_TR_NOOP("Castilla-León"),
            QT_TR_NOOP("Castilla-La-Mancha"),
            QT_TR_NOOP("Valencia"),
            QT_TR_NOOP("Extremadura"),
            QT_TR_NOOP("Galicia"),
            QT_TR_NOOP("Baleares"),
            QT_TR_NOOP("Canarias"),
            QT_TR_NOOP("La Rioja"),
            QT_TR_NOOP("Madrid"),
            QT_TR_NOOP("Murcia"),
            QT_TR_NOOP("Navarra"),
            QT_TR_NOOP("País Vasco"),
            QT_TR_NOOP("Ceuta"),
            QT_TR_NOOP("Melilla")
        ];
        if (region <= 0x13) {
            return tr(vals[region]);
        } else {
            return new QString(tr("Unknown region %1"))
                .arg(region).toString();
        }
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
