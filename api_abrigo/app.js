const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


const abrigoRoutes = require('./src/modules/abrigo/abrigo.routes');
const adminRoutes = require('./src/modules/admin/admin.routes');
const usuarioRoutes = require('./src/modules/usuario/usuario.routes');
const authRoutes = require('./src/modules/auth/auth.routes');


app.use('/api/abrigo', abrigoRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'API Abrigo funcionando!',
    rotas: ['/api/auth', '/api/abrigo', '/api/admin', '/api/usuario']
  });
});

module.exports = app;