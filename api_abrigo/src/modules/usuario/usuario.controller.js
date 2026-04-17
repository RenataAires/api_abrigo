const db = require("../../config/database");

const createUsuario = (req, res, next) => {
    const {
        nome,
        cpf,
        telefone,
        endereco,
    } = req.body;

    const stmt = db.prepare(`
        INSERT INTO usuario(
        nome,
        cpf,
        telefone,
        endereco) VALUES (?, ?, ?, ?)
        `);

    const result = stmt.run(nome, cpf, telefone, endereco);

    res.status(201).json({
        message: "Usuário criado com sucesso",
        data: result.lastInsertRowid,
    });
};  

const getAllUsuario = (req, res, next) => {

    const stmt = db.prepare(`SELECT * FROM usuario`);
    const usuario = stmt.all();

    res.status(200).json({
        message: "Usuários listados com sucesso",
        data: usuario
    });
};

const updateUsuario = (req, res, next) => {

    const { id } = req.params;
    const { nome, cpf, telefone, endereco } = req.body;

    const stmt = db.prepare(`UPDATE usuario SET nome = ?, cpf = ?, telefone = ?, endereco = ? WHERE id = ?`);
    const result = stmt.run(nome, cpf, telefone, endereco, id);

    res.status(200).json({
        message: "Usuário atualizado com sucesso!.",
        data: result
    });
};

const deleteUsuario = (req, res, next) => {

    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM usuario WHERE id = ?`);
    const result = stmt.run(id);

    res.status(200).json({
        message: "Usuário deletado com sucesso!.",
        data: result
    });
};

module.exports = { createUsuario, getAllUsuario, updateUsuario, deleteUsuario }