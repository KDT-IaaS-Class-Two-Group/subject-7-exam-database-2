const fs = require('fs')
const path = require('path')
const readFileModule = require('./readFileModule')


const fileRead = (req,res,rootDir)=>{
  const decodedUrl = decodeURIComponent(req.url);
  const normalize = path.normalize(decodedUrl)
  console.log(normalize)
  console.log(decodedUrl)

  let filePath;
  if(req.url.startsWith("/module")){
    filePath = path.join(rootDir,normalize)
    console.log(filePath)
  } else {
    filePath = path.join(rootDir,"public",normalize)
    console.log(filePath)
  }
  readFileModule(filePath,res)
}



module.exports = fileRead
// let req = "/module/mimeType.js"
// fileRead(req,"")