/**
 * 반복적으로 사용하는 에러 처리에 대한 함수입니다.
 * @param {*} res http res를 매개변수로 받습니다. 기본 매개변수 설정이 되어있습니다.
 */
const errorMsg = (error, res)=>{
  const errText = `<h1>Server dosen't answer.</h1>`

  res.writeHead(500,{"content-type" : "text/plain"})
  res.end(errText)
  console.error(`error : ${error}`)
}

module.exports = errorMsg