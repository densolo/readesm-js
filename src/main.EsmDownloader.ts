
let fileDownload = require('js-file-download'); // use require() because it fails with import

import EsmFile from 'EsmFile';
import JsonReporter from 'Reporter/JsonReporter';
import HtmlReporter from 'Reporter/HtmlReporter';

export function downloadEsmAsJson(filename: string) {
    console.log("downloadEsmAsJson: " + filename);

    downloadEsmData(filename, (data: ArrayBuffer) => {        
        let ef = EsmFile.parseData(data);
        let report = new JsonReporter();
        ef.printOn(report);

        let j = report.renderReport();

        fileDownload(j, filename.replace(/^.*\//, '') + '.json', 'application/json');    
    });

}

export function downloadEsmAsHtml(filename: string) {
    console.log("downloadEsmAsHtml: " + filename);

    downloadEsmData(filename, (data: ArrayBuffer) => {        
        let ef = EsmFile.parseData(data);
        let report = new HtmlReporter();
        ef.printOn(report);

        let j = report.renderReport();

        fileDownload(j, filename.replace(/^.*\//, '') + '.html', 'text/html');    
    });

}

function downloadEsmData(filename: string, callback: (data: any) => void) {
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
