const express = require('express');
const router = express.Router();
const usuarioController = require('./usuario.controller');
const authMiddleware = require('../../middleware/auth.middleware');


router.post('/', authMiddleware, usuarioController.createUsuario);

router.get('/', usuarioController.getAllUsuario);

router.patch('/:id', authMiddleware, usuarioController.updateUsuario);

router.delete('/:id', authMiddleware, usuarioController.deleteUsuario);

module.exports = router