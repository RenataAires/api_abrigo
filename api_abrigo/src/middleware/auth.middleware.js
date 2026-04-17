const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Acesso negado. Token não fornecido.'});
    }

    const parts = authHeader.split(' ');
    const token = parts[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.adminId = decoded.id;
        req.perfil = decoded.perfil;

        return next();

    } catch (error) {
        return res.status(401).json({ error: 'Token inválido ou expirado. Faça login novamente'});
    }
};

module.exports = authMiddleware;
