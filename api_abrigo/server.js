require('dotenv').config();
const app = require('./app');
require('./src/config/database');
require('./src/config/migrations');
require('./src/config/seed');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Ambiente: ${process.env.NODE_ENV}`);
    console.log(`API Abrigo: http://localhost:${PORT}/abrigo`);
});

