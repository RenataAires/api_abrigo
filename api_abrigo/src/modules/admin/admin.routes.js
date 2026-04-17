const express = require('express');
const router = express.Router();
const adminController = require('./admin.controller');
const authMiddleware = require('../../middleware/auth.middleware');

router.post('/', authMiddleware, adminController.createAdmin);

router.get('/', adminController.getAllAdmin);

router.patch('/:id', authMiddleware, adminController.updateAdmin);

router.delete('/:id', authMiddleware, adminController.deleteAdmin);

module.exports = router;