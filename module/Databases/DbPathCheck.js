/**
 * * DB이름을 체크하는 함수
 * ! Path는 string이어야만 하며, 해당 변수안에 .이 2개 이상이어서는 안된다.
 * @param {*} path : string
 */
function DbPathCheck(path){

  const errMsg = "잘못된 경로입니다."

  if(typeof path !== "string") throw new Error(errMsg);

  let split = path.split('.');

  //* 확장자가 붙어잇지 않다면, 확장자를 붙여준다.
  if(split.length === 1){
    return split + ".db";
  }

  else if(split.length === 2){
    //* 확장자가 붙어있다면 그대로 반환
    if(split[1] === "db") return path;

    //TODO 확장자가 잘못되어 있다면, Error를 throw할건지, 확장자를 수정할건지 선택하야됨.
    //if(split[1] !== ".db") return split[0] + ".db";
    throw new Error(errMsg);
  }
  
  else{
    throw new Error(errMsg);
  }
}

module.exports = DbPathCheck;