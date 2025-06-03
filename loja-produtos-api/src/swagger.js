const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Produtos',
      version: '1.0.0',
      description: 'API para gerenciar produtos de uma loja de departamentos',
    },
    servers: [
      {
        url: 'http://localhost:3000', // depois você troca para o link do deploy
      },
    ],
  },
  apis: ['./src/routes/*.js'], // lê os comentários nas rotas
};

const specs = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
