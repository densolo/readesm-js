
let fileDownload = require('js-file-download'); // use require() because it fails with import

import EsmFile from 'EsmFile';
import JsonReporter from 'Reporter/JsonReporter';

export function downloadEsmAsJson(filename: string) {
    console.log("downloadEsmAsJson: " + filename);

    downloadEsmData(filename, (data: ArrayBuffer) => {        
        let ef = EsmFile.parseData(data);
        let jsonReport = new JsonReporter();
        ef.printOn(jsonReport);
        let j = jsonReport.renderReport();

        fileDownload(j, filename.replace(/^.*\//, '') + '.json', 'application/json');    
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
