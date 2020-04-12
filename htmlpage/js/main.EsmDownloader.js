"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileDownload = require('js-file-download'); // use require() because it fails with import
var EsmFile_1 = require("EsmFile");
var JsonReporter_1 = require("Reporter/JsonReporter");
function downloadEsmAsJson(filename) {
    console.log("downloadEsmAsJson: " + filename);
    downloadEsmData(filename, function (data) {
        var ef = EsmFile_1.default.parseData(data);
        var report = new JsonReporter_1.default();
        ef.printOn(report);
        var j = report.renderReport();
        fileDownload(j, filename.replace(/^.*\//, '') + '.json', 'application/json');
    });
}
exports.downloadEsmAsJson = downloadEsmAsJson;
function downloadEsmData(filename, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", filename);
    xhr.responseType = "arraybuffer";
    xhr.onload = function () {
        if (this.status === 200) {
            callback(xhr.response);
        }
    };
    xhr.send();
}
//# sourceMappingURL=main.EsmDownloader.js.map