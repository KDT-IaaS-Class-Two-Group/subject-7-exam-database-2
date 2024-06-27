const Database = require("better-sqlite3");
const DbPathCheck = require("./DbPathCheck");

//Sqlite Query문 실행에 관한 메소드가 필요합니다.
class Sqlite {
  constructor(dbName) {
    this.dbName = DbPathCheck(dbName); // * dbName의 유효성을 검사한 후 저장
    try {
      this.db = this.connect(); // * 데이터베이스에 연결을 시도
    } catch (error) {
      console.error('Failed to connect to the database:', error.message); // * 연결 실패 시 에러 메시지 출력
      // 필요에 따라 여기서 추가적인 예외 처리 로직을 작성할 수 있습니다.
    }
  }

  /**
   * 데이터베이스에 연결하는 메서드. 없을 시 생성함.
   * @returns {Database} - SQLite 데이터베이스 객체
   */
  connect() {
    try {
      const dbPath = path.resolve(__dirname, this.dbName); // * 데이터베이스 파일 경로 설정

      // 데이터베이스 파일이 존재하는지 확인
      if (!fs.existsSync(dbPath)) {
        console.log('Database not found, creating new database...'); // * 파일이 없을 경우 생성 메시지 출력
      }

      // 데이터베이스 객체 생성 및 연결
      const db = new Database(dbPath, { verbose: console.log }); // * 데이터베이스 객체 생성
      return db; // * 생성된 객체 반환
    } catch (err) {
      console.error('Error connecting to the database:', err.message); // * 연결 중 에러 발생 시 메시지 출력
      throw err; // * 에러를 다시 던져서 상위 호출자로 전달
    }
  }

  /**
   * 데이터베이스가 없을 경우 생성하고 테이블을 생성하는 메서드
   * @param {string} tableName - 생성할 테이블 이름
   * @param {string} tableSchema - 테이블 스키마 정의
   */
  createTableIfNotExists(tableName, tableSchema) {
    try {
      const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${tableSchema})`; // * 테이블 생성 쿼리 작성
      this.db.exec(query); // * 테이블 생성 쿼리 실행
      console.log(`Table '${tableName}' is ready.`); // * 테이블 준비 완료 메시지 출력
    } catch (err) {
      console.error(`Error creating table '${tableName}':`, err.message); // * 테이블 생성 중 에러 발생 시 메시지 출력
      throw err; // * 에러를 다시 던져서 상위 호출자로 전달
    }
  }

    /**
   * 모든 종류의 SQL 쿼리 실행
   * @param {string} query - 실행할 SQL 쿼리
   * @param {Array} params - 쿼리에 바인딩할 매개변수
   * @returns {Object} - 쿼리 실행 결과
   */
    runQuery(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.run(params);
        return result;
      } catch (err) {
        console.error('Error running query:', err.message);
        throw err;
      }
    }
  
    /**
     * 단일 행 반환 쿼리 실행
     * @param {string} query - 실행할 SQL 쿼리
     * @param {Array} params - 쿼리에 바인딩할 매개변수
     * @returns {Object} - 쿼리 실행 결과의 첫 번째 행
     */
    get(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.get(params);
        return result;
      } catch (err) {
        console.error('Error running get query:', err.message);
        throw err;
      }
    }
  
    /**
     * 여러 행 반환 쿼리 실행
     * @param {string} query - 실행할 SQL 쿼리
     * @param {Array} params - 쿼리에 바인딩할 매개변수
     * @returns {Array} - 쿼리 실행 결과의 모든 행
     */
    all(query, params = []) {
      try {
        const stmt = this.db.prepare(query);
        const result = stmt.all(params);
        return result;
      } catch (err) {
        console.error('Error running all query:', err.message);
        throw err;
      }
    }
    /**
     * 데이터베이스 닫기 메서드
     */
    close() {
      try {
        this.db.close();
        console.log('Database closed successfully.');
      } catch (err) {
        console.error('Error closing database:', err.message);
        throw err;
      }
    }
}

module.exports = Sqlite