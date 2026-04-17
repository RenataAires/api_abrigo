const db = require('../config/database');



db.exec(`
    CREATE TABLE IF NOT EXISTS administrador(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf TEXT,
    senha TEXT )
    `);

db.exec(`
    CREATE TABLE IF NOT EXISTS usuario(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    cpf TEXT,
    telefone TEXT,
    endereco TEXT)
    `);

db.exec(`
    CREATE TABLE IF NOT EXISTS abrigo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    endereco TEXT,
    localizacao TEXT,
    ponto_de_referencia TEXT,
    capacidade_total INTEGER,
    ocupacao_total INTEGER,
    status TEXT)
    `);

db.exec(`
    CREATE TABLE IF NOT EXISTS admin_abrigo(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER REFERENCES administrador(id),
    abrigo_id INTEGER REFERENCES abrigo(id))
    `);

console.log('Banco de dados configurado: tabelas criadas');