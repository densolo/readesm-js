
import EsmFile from 'EsmFile';
import HtmlReporter from 'Reporter/HtmlReporter';
import JsonReporter from 'Reporter/JsonReporter';
import FileUtil from 'utils/FileUtil';

let data = FileUtil.readFileData('data/Input.ddd');
let ef = EsmFile.parseData(data);

let report = new HtmlReporter();
ef.printOn(report);
report.setTitle(ef.suggestTitle());

let html = report.renderReport();
FileUtil.writeFile('data/OutputJS.html', html);


let jsonReport = new JsonReporter();
ef.printOn(jsonReport);

let j = jsonReport.renderReport();
FileUtil.writeFile('data/OutputJS.json', j);

console.log("Done");

