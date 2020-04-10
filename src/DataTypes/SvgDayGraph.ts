
import QString from 'utils/QString';
import {tr} from 'utils/Translation';
import PictureGenerator from './PictureGenerator';


export default class SvgDayGraph extends PictureGenerator {

    drawBorderAndTimeAxis() {
        let rv = "";
        rv += "\n\t\t<g style='font-size:16px;text-anchor:middle'>";
        for (let j = 0; j < 25; j++) {
            rv += "\n\t\t\t<text x='" + (j * 30) + "' y='118'>" + j + "</text>";
        }
        rv += "\n\t\t\t<text x='360' y='132'>" + tr("Time of day (UTC)") + "</text>";
        rv += "\n\t\t</g>";
        rv += "\n\t\t<g style='stroke:black;stroke-width:2'>";
        for (let j = 0; j < 25; j++) {
            rv += "\n\t\t\t<line x1='" + (j * 30) + "' y1='100' x2='" + (j * 30) + "' y2='104'/>";
        }
        rv +="\n\t\t\t<polyline points='0,0 720,0 720,100 0,100 0,0' style='fill:none'/>";
        rv +="\n\t\t</g>";
        return rv;
    }
    
    
    addSvgHull(content: string, width: number) {
        return new QString("\n<svg xmlns='http://www.w3.org/2000/svg' width='%1' height='135'>\n\t<g transform='translate(10,0)'>")
            .arg(width).toString()
        + content
        + "\n\t</g>\n</svg>";
    }

}