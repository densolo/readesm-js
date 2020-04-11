

import * as fs from 'fs';

import EsmFile from 'EsmFile';
import HtmlReporter from 'Reporter/HtmlReporter';
import JsonReporter from 'Reporter/JsonReporter';
import FileUtil from 'utils/FileUtil';
import LastCardDownload from 'CardBlocks/LastCardDownload';


function main() {
    let args = process.argv.slice(2);
    let inputfile = args.length > 0 ? args[0] : 'data/Input.ddd';

    if (inputfile == 'analyze') {
        analyzeFiles();
    } else {
        convertFile(inputfile);
    }
    console.log("Done");
}

function analyzeFiles() {
    fs.readdirSync('htmlpage/card_data').forEach(filename => {
        if (filename.match(/.*\.DDD$/i)) {
            console.log("Parsing " + filename);
            let data = FileUtil.readFileData('htmlpage/card_data/' + filename);
            let ef = EsmFile.parseData(data);

            let lcd = EsmFile.findTypeInVector<LastCardDownload>(LastCardDownload, ef.blocks);
            if (lcd) {
                console.log("Found LastCardDownload in " + filename);
            }
        }
    });
}

function convertFile(inputfile: string) {
    let data = FileUtil.readFileData(inputfile);
    let ef = EsmFile.parseData(data);

    convertToHtml(ef, inputfile + '.html');
    convertToJson(ef, inputfile + '.json');
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





