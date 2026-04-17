const express = require('express');
const router = express.Router();
const abrigoController = require('./abrigo.controller');
const authMiddleware = require('../../middleware/auth.middleware');

router.post('/', authMiddleware, abrigoController.createAbrigo);

router.get('/', abrigoController.getAllAbrigos);

router.patch('/:id', authMiddleware, abrigoController.updateAbrigo);

router.delete('/:id',authMiddleware, abrigoController.deleteAbrigo);

module.exports = router