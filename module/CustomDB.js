const Sqlite = require("./Databases/Sqlite");
const ReadExel = require("./FileIO/ReadExel");

class CustomDB extends Sqlite {
  constructor(dbPath) {
    super(dbPath);
    this.CreateTable();
  }

  //TODO 쿼리문 실행 메소드가 필요함.
  //TODO Issue#10 이 완료되면 작성하겠음.
  CreateTable() {
    const EnumTableName = require("./Enum/EnumTableName")
    this.createTableIfNotExists('Users', EnumTableName.usersTable);
    if(this.createTableIfNotExists('Items', EnumTableName.itemsTable)) this.InitData('Items', ReadExel("public/resource/exel/item_list.xlsx"));
    this.createTableIfNotExists('PurchaesItems', EnumTableName.purchasedItemTable);
    this.createTableIfNotExists('SoldItems', EnumTableName.soldItemTable);
  }

  InitData(tableName, arrObj) {
    const ColumnIntoStr = (arrCol, add = "") => {
      let returnStr = ""

      for (let i = 0; i < arrCol.length; i++) {
        returnStr += (add + arrCol[i]);

        if (i !== arrCol.length - 1) returnStr += ",";
      }

      return returnStr
    }

    for (const obj of arrObj) {
      const keys = Object.keys(obj);

      const insertQuery = `
      INSERT INTO ${tableName} (${ColumnIntoStr(keys)})
      VALUES (${ColumnIntoStr(keys, "@")})
    `;

      this.runQuery(insertQuery, obj);
    }
  }
}

const customDB = new CustomDB('db/test.db');
module.exports = customDB;
