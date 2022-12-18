const fs = require('fs');
const XLSX = require('xlsx');
const jsontoxml = require('jsontoxml');

const workbook = XLSX.readFile('orul_orul_poyraz/files/un-map.xlsx');

let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}
console.log('json:\n', JSON.stringify(worksheets.Sheet1), '\n\n');