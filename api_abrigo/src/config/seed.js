const db = require("./database");
const bcrypt = require("bcrypt");

const adminExiste = db.prepare("SELECT * FROM administrador").get();

if (!adminExiste) {

  const nome = "Admin Teste";
  const cpf = "000.000.000-00";
  const senha = "admin123";

  const senhaCriptografada = bcrypt.hashSync(senha, 10);

  const stmt = db.prepare(`
          INSERT INTO administrador(
          nome,
          cpf,
          senha) VALUES (?, ?, ?)
          `);

   const result = stmt.run(nome, cpf, senhaCriptografada);

   console.log("Admin criado com sucesso!");
}

const abrigoExiste = db.prepare("SELECT * FROM abrigo").get();

if (!abrigoExiste) {

    const nome = "Escola Municipal do Centro";
    const endereco = "Rua da Magnólias";
    const localizacao = "-16.6864, -49.2643"
    const ponto_de_referencia = "próximo ao Correios";
    const capacidade_total = 150; 
    const ocupacao_total = 140; 
    const status = "Disponível";


    const stmt = db.prepare(`
          INSERT INTO abrigo(
          nome,
          endereco,
          localizacao,
          ponto_de_referencia,
          capacidade_total,
          ocupacao_total,
          status) VALUES (?, ?, ?, ?, ?, ?, ?)
          `);

     const result = stmt.run(nome, endereco, localizacao, ponto_de_referencia, capacidade_total, ocupacao_total, status);

   console.log("Abrigo criado com sucesso!");


}