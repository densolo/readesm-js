
let fileDownload = require('js-file-download'); // use require() because it fails with import

import EsmFile from 'EsmFile';
import JsonReporter from 'Reporter/JsonReporter';
import HtmlReporter from 'Reporter/HtmlReporter';


export function downloadEsmAsJson(filename: string) {
    console.log("downloadEsmAsJson: " + filename);

    readEsmData(filename).then((data: ArrayBuffer) => {
        let j = convertToJson(data);
        let jsonData = JSON.stringify(j, null, 4);
        saveFile(jsonData, filename + '.json', 'application/json');
    });
}

export function downloadEsmAsHtml(filename: string) {
    console.log("downloadEsmAsHtml: " + filename);

    readEsmData(filename).then((data: ArrayBuffer) => {                
        let html = convertToHtml(data);
        saveFile(html, filename + '.html', 'text/html');
    });
}

export function convertToJson(data: ArrayBuffer): any {        
    let ef = EsmFile.parseData(data);
    let report = new JsonReporter();
    ef.printOn(report);
    report.renderReport();
    return report.jsonCollected as any;
}

export function convertToHtml(data: ArrayBuffer): string {        
    let ef = EsmFile.parseData(data);
    let report = new HtmlReporter();
    ef.printOn(report);
    return report.renderReport();
}

export function saveFile(data, filename, mime) {
    fileDownload(data, filename.replace(/^.*\//, ''), mime); 
}

export function readEsmData(filename: string) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
    
        xhr.open("GET", filename);
        xhr.responseType = "arraybuffer";

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(Error(`Failed to GET filename ${filename} HTTP ${xhr.status} - ${xhr.statusText}`));
            }
        };

        xhr.onerror = () => {
            let msg = `Connection Error while GET filename ${filename}`;
            console.error(msg);
            reject(Error(msg));
        };
        
        xhr.send();
    });
    
}
