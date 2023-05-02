
import EsmFile from 'EsmFile';
import JsonReporter from 'Reporter/JsonReporter';
import FileUtil from 'utils/FileUtil';
import * as _ from 'lodash';


test('convert ddd to json', () => {

    let data = FileUtil.readFileData('tests/data/Input.ddd');
    let ef = EsmFile.parseData(data);

    console.log('ef', ef)
    let jsonReport = new JsonReporter();
    ef.printOn(jsonReport);

    let j = jsonReport.jsonCollected;

    let block = j['CardIccIdentification'];

    console.log("j: " + block['cardExtendedSerialNumber']);

    expect(_.keys(j).length).toBe(15);
    expect(j['title']).toBe("Dragut, Gabriel 2017-10-03 to 2018-10-31");

    expect(JSON.stringify(block, null, 4)).toBe(JSON.stringify({
        "title": "Card ICC identification",
        "clockStop": 0,
        "cardExtendedSerialNumber": {
            "title": "537377 (2017-05) RFU: 255, Gemalto AG (formerly Trüb AG)",
            "serialNumber": 537377,
            "date": {
                "title": "2017-05",
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

test('convert tgd to json', () => {
    let data = FileUtil.readFileData('tests/data/TachoFile_E53014218T000001_20230329_20230427.tgd');
    console.log(EsmFile.parseData(data))
    data = FileUtil.readFileData('tests/data/TachoFile_6976-KWH_20230329_20230427.tgd');
    console.log(EsmFile.parseData(data))
    data = FileUtil.readFileData('tests/data/TachoFile_4449-KCW_20230329_20230427.tgd');
    console.log(EsmFile.parseData(data))
});
