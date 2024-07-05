const db = require("./CustomDB");
const mimeType = require("./mimeTypes");
require('dotenv').config();

const ItemList = async (res) => {
  try{
    const result = db.all("select * from items");

    for(let obj of result){
      if('src' in obj){
        obj["src"] = process.env.IMG_PATH + obj["src"] + process.env.IMG_EXTENSION;
      }
    }

    const data = JSON.stringify(result);
    res.writeHead(200,{"content-Type": `${mimeType.json}`})
    res.end(data)
  } catch(err){
    res.statusCode = 400;
    res.end();
  }
}

module.exports = ItemList;