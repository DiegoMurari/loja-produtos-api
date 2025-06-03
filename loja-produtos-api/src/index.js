const express = require('express');
require('dotenv').config();
const conectarDB = require('./db');

const app = express();
const port = process.env.PORT || 3000;

const setupSwagger = require('./swagger');
setupSwagger(app);

// Conectar ao MongoDB
conectarDB();

// Middleware para JSON
app.use(express.json());

// Rotas
const produtoRoutes = require('./routes/produtoRoutes');
app.use('/produtos', produtoRoutes);

// Rota básica de teste
app.get('/', (req, res) => {
  res.send('API de Produtos está online!');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
