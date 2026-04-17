const db = require("../../config/database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createLogin = (req, res, next) => {

    const {
        cpf,
        senha
    } = req.body;
    

    const stmt = db.prepare(`SELECT * FROM administrador WHERE cpf = ?`);
    const admin = stmt.get(cpf);

     if (!admin) {
        return res.status(401).json({error: 'Acesso negado. Admin não existe.'})
    }

    const senhaCorreta = bcrypt.compareSync(senha, admin.senha);

    if (!senhaCorreta) {
        return res.status(401).json({error: 'Acesso negado. Senha incorreta.'})
    }

    const token = jwt.sign(
        { id: admin.id},
        process.env.JWT_SECRET,
        { expiresIn: '8h'}
    );


    res.status(201).json({
        message: "Login realizado com sucesso",
        data: token
    });
};

module.exports = { createLogin };