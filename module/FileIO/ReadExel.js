/**
 * * Exel을 읽어 객체로 반환
 * ! 첫 번째 행은 속성이 적혀있어야 한다.
 * @param {*} path 
 * @returns 
 */
function ReadExel(path){
  const XLSX = require('xlsx');

  const workbook = XLSX.readFile(path);
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  const headers = jsonData[0];
  const data = jsonData.slice(1);

  const result = data.map(row => {
    let obj = {};
    row.forEach((cell, index) => {
      obj[headers[index]] = cell;
    });
    return obj;
  });

  return result
}

console.log(ReadExel("public/resource/exel/item_list.xlsx"));