"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var EsmFile_1 = require("EsmFile");
var HtmlReporter_1 = require("Reporter/HtmlReporter");
var JsonReporter_1 = require("Reporter/JsonReporter");
var FileUtil_1 = require("utils/FileUtil");
var LastCardDownload_1 = require("CardBlocks/LastCardDownload");
var BlockParseError_1 = require("DataTypes/BlockParseError");
function main() {
    var args = process.argv.slice(2);
    var inputfile = args.length > 0 ? args[0] : 'data/Input.ddd';
    if (inputfile == 'analyze') {
        analyzeFiles();
    }
    else {
        var ef = convertFile(inputfile);
        var err = EsmFile_1.default.findTypeInVector(BlockParseError_1.default, ef.blocks);
        if (err) {
            console.log("Failed");
            process.exit(1);
        }
    }
    console.log("Done");
}
function analyzeFiles() {
    fs.readdirSync('htmlpage/card_data').forEach(function (filename) {
        if (filename.match(/.*\.DDD$/i)) {
            console.log("Parsing " + filename);
            var data = FileUtil_1.default.readFileData('htmlpage/card_data/' + filename);
            var ef = EsmFile_1.default.parseData(data);
            var lcd = EsmFile_1.default.findTypeInVector(LastCardDownload_1.default, ef.blocks);
            if (lcd) {
                console.log("Found LastCardDownload in " + filename);
            }
        }
    });
}
function convertFile(inputfile) {
    var data = FileUtil_1.default.readFileData(inputfile);
    var ef = EsmFile_1.default.parseData(data);
    convertToHtml(ef, inputfile + '.html');
    convertToJson(ef, inputfile + '.json');
    return ef;
}
function convertToHtml(ef, outfile) {
    var report = new HtmlReporter_1.default();
    ef.printOn(report);
    var html = report.renderReport();
    FileUtil_1.default.writeFile(outfile, html);
    console.log("Converted into HTML in " + outfile);
}
function convertToJson(ef, outfile) {
    var report = new JsonReporter_1.default();
    ef.printOn(report);
    var j = report.renderReport();
    FileUtil_1.default.writeFile(outfile, j);
    console.log("Converted into JSON in " + outfile);
}
main();
//# sourceMappingURL=main.EsmConverter.js.map