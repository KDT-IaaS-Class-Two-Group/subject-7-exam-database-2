const mimeType = require('./mimeTypes.js')
const path = require('path')
const fs = require('fs')

const readFile = (reqUrl, res, contentType) => {
  if(contentType = "png" || "jpg"){
    let reFinePath = path.join(__dirname,"public","resource",contentType,reqUrl.split("/")[1])
      fs.readFile(reFinePath,(err,data)=>{
        if(err){
          res.writeHead(500, {"content-type" : mimeType["txt"]})
          res.write("server error")
        } else {
          res.writeHead(200, {"content-type" : mimeType[contentType]})
          res.write(data)
          res.end()
        }
      })
  }else{
  let reFinePath = path.join(__dirname,"public",contentType,reqUrl.split("/")[1])
    fs.readFile(reFinePath,"utf-8",(err,data)=>{
      if(err){
        res.writeHead(500, {"content-type" : mimeType["txt"]})
        res.write("server error")
      } else {
        // console.log(data)
        res.writeHead(200, {"content-type" : mimeType[contentType]})
        res.write(data)
        res.end()
      }
    })
  }
}

module.exports = readFile
