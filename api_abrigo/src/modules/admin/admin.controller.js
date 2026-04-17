  const db = require("../../config/database");
  const bcrypt = require("bcrypt");

  const createAdmin = (req, res, next) => {
    const { nome, cpf, senha } = req.body;

    const senhaCriptografada = bcrypt.hashSync(senha, 10);

    const stmt = db.prepare(`
          INSERT INTO administrador(
          nome,
          cpf,
          senha) VALUES (?, ?, ?)
          `);

    const result = stmt.run(nome, cpf, senhaCriptografada);

    res.status(201).json({
      message: "Administrador criado com sucesso!",
      data: result.lastInsertRowid,
    });
  };

  const getAllAdmin = (req, res, next) => {

      const stmt = db.prepare(`SELECT * FROM administrador`);
      const administrador = stmt.all();

      res.status(200).json({
          message:    "Administradores listados com sucesso",
          data: administrador
      });
  };

  const updateAdmin = (req, res, next) => {

      const { id } = req.params;
      const { nome, cpf, senha} = req.body;

      const senhaCriptografada = bcrypt.hashSync(senha, 10);

      const stmt = db.prepare(`UPDATE administrador SET nome = ?, cpf = ?, senha = ? WHERE id = ?`);
      const result = stmt.run(nome, cpf, senhaCriptografada, id);

      res.status(200).json({
        message: "Administrador atualizado com sucesso!",
        data: result
      });
  };

  const deleteAdmin = (req, res,  next) => {

    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM administrador WHERE id = ?`);
    const result = stmt.run(id);

    res.status(200).json({
      message: "Administrador deletado com sucesso!",
      data: result
    });
  };

  module.exports = { createAdmin, getAllAdmin, updateAdmin, deleteAdmin }
