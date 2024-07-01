const fs = require('fs')
const mimeType = require('./mimeTypes.js')
const errorMsg = require('./errorMsg.js')

/**
 * 파일을 동적으로 처리해주기 위한 함수입니다
 * 
 * @param res 
 * @param arguPath readFile에 매개변수asda로 들어가는 경로입니다.
 * @param mimeIndex mimeType 모듈에서 동적으로 contentType을 적용하기 위한 매개변수 입니다
 */

const readFileModule = (arguPath,mimeIndex,res)=>{
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