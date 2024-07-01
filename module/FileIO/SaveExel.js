function SaveExel(arrObj, name){
  const XLSX = require('xlsx'); 
  const wb = XLSX.utils.book_new(); 
  const ws = XLSX.utils.json_to_sheet(arrObj); 
  
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, name);
}

