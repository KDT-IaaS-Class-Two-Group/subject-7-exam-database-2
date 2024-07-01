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
    const EnumTableName = require("./Enum/EnumTableName")
    this.createTableIfNotExists('Users', EnumTableName.usersTable);
    this.createTableIfNotExists('Items', EnumTableName.itemsTable);
    this.createTableIfNotExists('PurchaesItems', EnumTableName.purchasedItemTable);
    this.createTableIfNotExists('SoldItems', EnumTableName.soldItemTable);
  }
}

const customDB = new CustomDB('db/test.db');
module.exports = customDB;
