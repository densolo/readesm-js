

import TopLevelBlock from 'DataTypes/TopLevelBlock';
import Reporter from 'Reporter/Reporter';
import {tr} from 'utils/Translation';


export default class BlockParseError extends TopLevelBlock {

    errorMessage: string;

    constructor(errorMessage: ArrayBuffer|string) {
        super(errorMessage);

        this.errorMessage = errorMessage.toString();
    }

    className() {
        return "BlockParseError";
    }

    title() {
        return "Block Parse Error";
    }

    toString() {
		return "Block Parse Error: " + this.errorMessage;
    }

    printOn(report: Reporter) {
        if (report.allowSvg()) {
            report.tagValuePair(tr("errorMessage"), `<h3 style="color: red">${this.errorMessage}</h3>`);
        } else {
            report.tagValuePair(tr("errorMessage"), this.errorMessage.toString());
        }
    }
}

