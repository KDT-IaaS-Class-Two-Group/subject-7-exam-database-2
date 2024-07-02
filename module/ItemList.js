const db = require("./CustomDB");
const mimeType = require("./mimeTypes");

const ItemList = async (res) => {
  try{
    const result = db.all("select * from items");
    const data = JSON.stringify(result);
    res.writeHead(200,{"content-Type": '${mimeType.json}'})
    res.end(data)
  } catch(err){
    res.statusCode = 400;
    res.end();
  }
}

module.exports = ItemList;