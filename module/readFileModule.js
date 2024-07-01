const fs = require('fs')
const mimeType = require('./mimeTypes.js')
const path = require('path')
const errorMsg = require('./errorMsg.js')

/**
 * 파일을 동적으로 처리해주기 위한 함수입니다
 * 
 * @param res 
 * @param arguPath readFile에 매개변수로 들어가는 경로입니다.
 */

const readFileModule = (arguPath,res)=>{

  let mimeIndex = path.extname(arguPath).substring(1)

  fs.readFile(arguPath,(err,data)=>{
    if(err){
      console.error(`readFile Error : ${err}`)
      errorMsg(err, res)
    
    } else {
      res.writeHead(200,{"content-Type": mimeType[mimeIndex]})
      res.end(data)

    }
  })
}

module.exports = readFileModule
// readFileModule("/module/reDirect.js","")