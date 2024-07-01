const path = require('path')
const readFileModule = require('./readFileModule')

/**
 * 
 * readFileModule을 통해서 읽어온 파일에 대한 경로 처리를 도와주는 모듈입니다.
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} rootDir 코드가 실행되는 파일을 기준으로 계산될 기초 경로입니다.
 */

const fileServe = (req,res,rootDir)=>{
  const decodedUrl = decodeURIComponent(req.url);
  const normalize = path.normalize(decodedUrl)
  const ext = path.extname(normalize).substring(1) // req.url에서 확장자 부분을 변수 값에 받습니다

  let filePath;
  if(req.url.startsWith("/module")){
    filePath = path.join(rootDir,normalize)
    console.log(filePath)
  } else {
    filePath = path.join(rootDir,"public",normalize)
    console.log(filePath)
  }
  readFileModule(filePath,ext,res)
}



module.exports = fileServe
// let req = "/module/mimeType.js"
// fileServe(req,)