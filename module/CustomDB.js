const Sqlite = require("./Databases/Sqlite");
const EnumCreateTable = require("./Enum/EnumCreateTable");

class CustomDB extends Sqlite{
  constructor(dbPath){
    super(dbPath);
    this.CreateTable();
  }

  //TODO 쿼리문 실행 메소드가 필요함.
  //TODO Issue#10 이 완료되면 작성하겠음.
  CreateTable(){
    this.runQuery(EnumCreateTable.ITEM_TABLE)
  }
}

// TEST
// const customDB = new CustomDB("db/hello.db");