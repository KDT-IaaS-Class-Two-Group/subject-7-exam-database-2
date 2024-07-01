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


const db = new CustomDB('mydatabase.db'); // 'mydatabase.db'라는 이름의 데이터베이스를 생성하거나 연결합니다.

const usersTable = `
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  address TEXT,
  email TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
`; 
/* 
'usersTable' 변수에 'Users' 테이블의 스키마를 정의합니다.
- user_id: 기본 키로서 자동 증가하는 정수 값
- name: NULL 값을 허용하지 않는 텍스트 값
- password: NULL 값을 허용하지 않는 텍스트 값
- address: 텍스트 값, NULL 값을 허용
- email: 텍스트 값, NULL 값을 허용
- created_at: 현재 타임스탬프를 기본값으로 하는 DATETIME 값
*/

const itemsTable = `
  item_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  isSell BOOLEAN NOT NULL CHECK (isSell IN (0, 1)),
  weight REAL,
  type TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
`;
/* 
'itemsTable' 변수에 'Items' 테이블의 스키마를 정의합니다.
- item_id: 기본 키로서 자동 증가하는 정수 값
- name: NULL 값을 허용하지 않는 텍스트 값
- price: NULL 값을 허용하지 않는 실수 값
- isSell: NULL 값을 허용하지 않는 불린 값 (0 또는 1)
- weight: 실수 값, NULL 값을 허용
- type: 텍스트 값, NULL 값을 허용
- created_at: 현재 타임스탬프를 기본값으로 하는 DATETIME 값
*/

const purchasedItemTable = `
  purchase_id INTEGER PRIMARY KEY AUTOINCREMENT,
  buyer_id INTEGER,                               
  item_id INTEGER,
  user_id INTEGER,
  price REAL,
  address TEXT NOT NULL,
  purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (buyer_id) REFERENCES Users (user_id),  
  FOREIGN KEY (item_id) REFERENCES Items (item_id)   
`;
/* 
'purchasedItemTable' 변수에 'PurchasedItems' 테이블의 스키마를 정의합니다.
- purchase_id: 기본 키로서 자동 증가하는 정수 값
- buyer_id: 정수 값, 구매자 ID (Users 테이블의 user_id 참조)
- item_id: 정수 값, 'Items' 테이블의 item_id 참조
- user_id: 정수 값, 'Users' 테이블의 user_id 참조
- price: 실수 값
- address: NULL 값을 허용하지 않는 텍스트 값
- purchase_date: 현재 타임스탬프를 기본값으로 하는 DATETIME 값
- FOREIGN KEY (buyer_id) REFERENCES Users (user_id): 사용자 테이블과의 관계 설정
- FOREIGN KEY (item_id) REFERENCES Items (item_id): 아이템 테이블과의 관계 설정
*/

const soldItemTable = `
  sale_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  seller_id INTEGER,                         
  item_id INTEGER,                           
  quantity INTEGER,                           
  total_price REAL,                          
  sale_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  buyer_info TEXT,                            
  status TEXT DEFAULT 'completed',           
  bank_account TEXT,                          
  item_grade TEXT,                            
  FOREIGN KEY (seller_id) REFERENCES Users (user_id), 
  FOREIGN KEY (item_id) REFERENCES Items (item_id)     
`;
/* 
'soldItemTable' 변수에 'SoldItems' 테이블의 스키마를 정의합니다.
- sale_id: 기본 키로서 자동 증가하는 정수 값
- seller_id: 정수 값, 판매자 ID (Users 테이블의 user_id 참조)
- item_id: 정수 값, 'Items' 테이블의 item_id 참조
- quantity: 정수 값, 판매된 아이템의 수량
- total_price: 실수 값, 총 판매 금액
- sale_date: 현재 타임스탬프를 기본값으로 하는 DATETIME 값
- buyer_info: 텍스트 값, 구매자 정보 (이메일, 주소 등)
- status: 기본값이 'completed'인 텍스트 값, 판매 상태 (예: completed, returned 등)
- bank_account: 텍스트 값, 판매자의 계좌번호
- item_grade: 텍스트 값, 판매된 상품의 상태 등급
- FOREIGN KEY (seller_id) REFERENCES Users (user_id): 사용자 테이블과의 관계 설정
- FOREIGN KEY (item_id) REFERENCES Items (item_id): 아이템 테이블과의 관계 설정
*/

db.createTableIfNotExists('Users', usersTable); // 'Users' 테이블이 존재하지 않으면, 'usersTable'에 정의된 스키마를 기반으로 테이블을 생성합니다.
db.createTableIfNotExists('Items', itemsTable); // 'Items' 테이블이 존재하지 않으면, 'itemsTable'에 정의된 스키마를 기반으로 테이블을 생성합니다.
db.createTableIfNotExists('PurchasedItems', purchasedItemTable); // 'PurchasedItems' 테이블이 존재하지 않으면, 'purchasedItemTable'에 정의된 스키마를 기반으로 테이블을 생성합니다.
db.createTableIfNotExists('SoldItems', soldItemTable); // 'SoldItems' 테이블이 존재하지 않으면, 'soldItemTable'에 정의된 스키마를 기반으로 테이블을 생성합니다.

db.close(); // 데이터베이스 연결을 종료합니다.

