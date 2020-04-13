
import SvgDayGraph from "DataTypes/SvgDayGraph";
import {tr} from "utils/Translation";
import QString from "utils/QString";


export default class SvgDayActivity extends SvgDayGraph {

    toString() {
        return this.addSvgHull("\n\t\t<g transform='scale(0.5,-1) translate(0,-100)'>" 
            + this.collected + "\n\t\t</g>" 
            + this.drawBorderAndTimeAxis() 
            + this.drawLegend(), 900);
    }

    add(from: number, duration: number, height: number, color: string, title: string) {
        this.collected += "\n\t\t\t<rect x='" + from + "' fill='" + color + "' width='"
            + duration + "' height='" + Math.floor(height * 80) + "'><title>" + title + "</title></rect>";
    }

    drawLegend() {
        return new QString(
            "\n\t\t<g style='font-size:16px;text-anchor:left'>" +
            "\n\t\t\t<rect x='730' y='106' fill='purple' width='30' height='16'/><text x='765' y='120' text-anchor='start'>= %6</text>" +
            "\n\t\t\t<rect x='730' y='86' fill='red' width='30' height='16'/><text x='765' y='100' text-anchor='start'>= %1</text>" +
            "\n\t\t\t<rect x='730' y='66' fill='orange' width='30' height='16'/><text x='765' y='80' text-anchor='start'>= %2</text>" +
            "\n\t\t\t<rect x='730' y='46' fill='yellow' width='30' height='16'/><text x='765' y='60' text-anchor='start'>= %3</text>" +
            "\n\t\t\t<rect x='730' y='26' fill='green' width='30' height='16'/><text x='765' y='40' text-anchor='start'>= %4</text>" +
            "\n\t\t\t<rect x='730' y='6' fill='black' width='30' height='16'/><text x='765' y='20' text-anchor='start'>= %5</text>" +
            "\n\t\t</g>"
            )
            .arg(tr("break/rest"))
            .arg(tr("short break"))
            .arg(tr("working"))
            .arg(tr("driving"))
            .arg(tr("available"))
            .arg(tr("unknown")).toString();
    }
}
