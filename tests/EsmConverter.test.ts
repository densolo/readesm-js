
import isEmpty from 'lodash/isEmpty';
import EsmFile from 'EsmFile';
import HtmlReporter from 'Reporter/HtmlReporter';
import JsonReporter from 'Reporter/JsonReporter';
import FileUtil from 'utils/FileUtil';


test('convert ddd to json', () => {

    let data = FileUtil.readFileData('data/Input.ddd');
    let ef = EsmFile.parseData(data);

    let jsonReport = new JsonReporter();
    ef.printOn(jsonReport);

    let j = jsonReport.jsonCollected;

    console.log("j: " + j.blocks[0]['cardExtendedSerialNumber']);

    expect(j['blocks'].length).toBe(14);
    expect(JSON.stringify(j['blocks'][0], null, 4)).toBe(JSON.stringify({
        "title": "Card ICC identification",
        "className": "CardIccIdentification",
        "clockStop": 0,
        "cardExtendedSerialNumber": {
            "title": "537377 (2017-05) RFU: 255, Gemalto AG (formerly Trüb AG)",
            "className": "ExtendedSerialNumber",
            "serialNumber": 537377,
            "date": {
                "title": "2017-05",
                "className": "BcdMonthYear",
                "encodedDate": "05 17"
            }
        },
        "equipmentType": "RFU: 255",
        "manufacturerCode": "Gemalto AG (formerly Trüb AG)",
        "cardApprovalNumber": "65 31 20 32 32 36 30 31",
        "cardPersonaliserID": "21",
        "embedderIcAssemblerId": "30 37 36 35 00",
        "icIdentifier": "76 0c"
    }, null, 4));
});

