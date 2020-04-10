
import EsmFile from 'EsmFile';
import HtmlReporter from 'Reporter/HtmlReporter';
import JsonReporter from 'Reporter/JsonReporter';
import FileUtil from 'utils/FileUtil';


function main() {
    let args = process.argv.slice(2);
    let inputfile = args.length > 0 ? args[0] : 'data/Input.ddd';
    let data = FileUtil.readFileData(inputfile);
    let ef = EsmFile.parseData(data);

    convertToHtml(ef, inputfile + '.html');
    convertToJson(ef, inputfile + '.json');

    console.log("Done");
}

function convertToHtml(ef: EsmFile, outfile: string) {
    let report = new HtmlReporter();
    ef.printOn(report);

    let html = report.renderReport();
    FileUtil.writeFile(outfile, html);
    console.log(`Converted into HTML in ${outfile}`);
}

function convertToJson(ef: EsmFile, outfile: string) {
    let report = new JsonReporter();
    ef.printOn(report);

    let j = report.renderReport();
    FileUtil.writeFile(outfile, j);
    console.log(`Converted into JSON in ${outfile}`);
}

main();





