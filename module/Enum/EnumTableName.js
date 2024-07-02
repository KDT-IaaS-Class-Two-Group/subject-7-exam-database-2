const EnumTableName = Object.freeze({
  usersTable : `
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  address TEXT,
  email TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
`,
/* 
'usersTable' 변수에 'Users' 테이블의 스키마를 정의합니다.
- user_id: 기본 키로서 자동 증가하는 정수 값
- name: NULL 값을 허용하지 않는 텍스트 값
- password: NULL 값을 허용하지 않는 텍스트 값
- address: 텍스트 값, NULL 값을 허용
- email: 텍스트 값, NULL 값을 허용
- created_at: 현재 타임스탬프를 기본값으로 하는 DATETIME 값
*/

itemsTable : `
  item_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  min_price INTEGER NOT NULL,
  max_price INTEGER,
  is_sell BOOLEAN NOT NULL CHECK (is_sell IN (0, 1)),
  weight INTEGER,
  type TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
`,
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

purchasedItemTable : `
  purchase_id INTEGER PRIMARY KEY AUTOINCREMENT,
  buyer_id INTEGER,                               
  item_id INTEGER,
  user_id INTEGER,
  price REAL,
  address TEXT NOT NULL,
  purchase_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (buyer_id) REFERENCES Users (user_id),  
  FOREIGN KEY (item_id) REFERENCES Items (item_id)   
`,
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

soldItemTable : `
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
`,
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

});

module.exports = EnumTableName;