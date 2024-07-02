const Database = require('better-sqlite3'); // better-sqlite3 모듈을 불러와 SQLite 데이터베이스와의 상호작용을 가능하게 합니다.
const path = require('path'); // Node.js 기본 모듈 path를 불러와 파일 및 디렉토리 경로 작업을 도와줍니다.
const fs = require('fs'); // Node.js 기본 모듈 fs를 불러와 파일 시스템 관련 작업을 처리합니다.
const DbPathCheck = require('./DbPathCheck'); // DbPathCheck 함수 불러오기, 데이터베이스 경로를 검증하고 확장자를 추가합니다.

class Sqlite {
  constructor(dbName) {
    this.dbName = DbPathCheck(dbName); // dbName을 검증하고 확장자를 추가합니다.
    this.db = this.connect();
  }

  /**
   * 데이터베이스에 연결하는 메서드. 없을 시 생성함.
   * @returns {Database} - SQLite 데이터베이스 객체
   */
  connect() {
    return new Database(this.dbName, { verbose: console.log }); // 데이터베이스 객체를 생성하고 연결합니다..
  }

  /**
   *! 데이터베이스가 없을 경우 생성하고 테이블을 생성하는 메서드
   * @param {string} tableName - 생성할 테이블 이름
   * @param {string} tableSchema - 테이블 스키마 정의
   */
  createTableIfNotExists(tableName, tableSchema) {
    try {
      const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${tableSchema})`; // 테이블 생성 SQL 쿼리문 작성
      const result = this.runQuery(query); // runQuery 메서드를 호출하여 쿼리를 실행합니다.
      return result;
    } catch (err) { // 오류가 발생하면
      console.error(`Error creating table '${tableName}':`, err.message); // 오류 메시지를 콘솔에 출력합니다.
      throw err; // 예외를 던져 호출자에게 오류를 알립니다.
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
      const stmt = this.db.prepare(query); // sql 문을 준비합니다.
      const result = stmt.run(params); // 매개변수를 사용하여 쿼리를 실행합니다.
      return result; // 실행 결과를 반환합니다.
    } catch (err) { // 오류가 발생하면
      console.error('Error running query:', err.message); // 오류 메시지를 콘솔에 출력합니다.
      throw err; // 예외를 던져 호출자에게 오류를 알립니다.
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
      const stmt = this.db.prepare(query); // sql 문을 준비합니다.
      const result = stmt.get(params); // 매개변수를 사용하여 단일 행 쿼리를 실행합니다.
      return result; // 첫 번째 행의 결과를 반환합니다.
    } catch (err) { // 오류가 발생하면
      console.error('Error running get query:', err.message); // 오류 메시지를 콘솔에 출력합니다.
      throw err; // 예외를 던져 호출자에게 오류를 알립니다.
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
      const stmt = this.db.prepare(query); // sql 문을 준비합니다.
      const result = stmt.all(params); // 매개변수를 사용하여 여러 행 쿼리를 실행합니다.
      return result; // 모든 행의 결과를 배열로 반환합니다.
    } catch (err) { // 오류가 발생하면
      console.error('Error running all query:', err.message); // 오류 메시지를 콘솔에 출력합니다.
      throw err; // 예외를 던져 호출자에게 오류를 알립니다.
    }
  }

  /**
   * 데이터베이스 닫기 메서드
   */
  close() {
    try {
      this.db.close(); // 데이터베이스 연결을 종료합니다.
      console.log('Database closed successfully.'); // 성공 메시지를 콘솔에 출력합니다.
    } catch (err) { // 오류가 발생하면
      console.error('Error closing database:', err.message); // 오류 메시지를 콘솔에 출력합니다.
      throw err; // 예외를 던져 호출자에게 오류를 알립니다.
    }
  }
}

module.exports = Sqlite; // Sqlite 클래스를 모듈로 내보내어 다른 파일에서 사용할 수 있게 합니다.