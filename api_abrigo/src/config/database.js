const Database = require('better-sqlite3');
const db = new Database('./database.db');
db.pragma('foreign_keys = ON');

console.log('Banco de dados conectado com sucesso!');

module.exports = db;