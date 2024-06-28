const EnumCreateTable = Object.freeze({
  ITEM_TABLE : `
    CREATE TABLE IF NOT EXISTS items (
    name TEXT,
    min_price INTEGER,
    max_price INTEGER,
    weight INTEGER,
    type TEXT,
    is_sell BOOLEAN
  )`
})

module.exports = EnumCreateTable;