const db = require("../../config/database");

const createAbrigo = (req, res, next) => {
  const {
    nome,
    endereco,
    localizacao,
    ponto_de_referencia,
    capacidade_total,
    ocupacao_total,
    status,
  } = req.body;

  const stmt = db.prepare(`
    INSERT INTO abrigo(nome, endereco, localizacao, ponto_de_referencia,
        capacidade_total, ocupacao_total, status) VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

  const result = stmt.run(
    nome,
    endereco,
    localizacao,
    ponto_de_referencia,
    capacidade_total,
    ocupacao_total,
    status,
  );

  res.status(201).json({
    message: "Abrigo cadastrado com sucesso",
    data: result.lastInsertRowid
  });
};

const getAllAbrigos = (req, res, next) => {

    const stmt = db.prepare(`SELECT * FROM abrigo`);
    const abrigos = stmt.all();

    res.status(200).json({
        message: "Abrigos listados con sucesso",
        data: abrigos
    });
};

const updateAbrigo = (req, res, next) => {

    const { id } = req.params;
    const {ocupacao_total, status,} = req.body;

    const stmt = db.prepare(`UPDATE abrigo SET ocupacao_total = ?, status = ? WHERE id = ?`);
    const result = stmt.run(ocupacao_total, status, id);

    res.status(200).json({
        message: "Abrigos atualizados com sucesso!",
        data: result
    });
}

const deleteAbrigo = (req, res, next) => {

    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM abrigo WHERE id = ? `);
    const result = stmt.run(id);

    res.status(200).json({

        message: "Abrigo deletado com sucesso!",
        data: result
  });
};

module.exports = {createAbrigo, getAllAbrigos, updateAbrigo, deleteAbrigo};