const express = require('express');
const router = express.Router();
const {
  listarProdutos,
  obterProdutoPorId,
  obterProdutoPorNome,
  criarProduto,
  atualizarProduto,
  deletarProduto,
} = require('../controllers/produtoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       required:
 *         - nome
 *         - descricao
 *         - cor
 *         - peso
 *         - tipo
 *         - preco
 *       properties:
 *         _id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         nome:
 *           type: string
 *           description: Nome do produto
 *         descricao:
 *           type: string
 *           description: Descrição do produto
 *         cor:
 *           type: string
 *           description: Cor do produto
 *         peso:
 *           type: number
 *           description: Peso do produto (em gramas)
 *         tipo:
 *           type: string
 *           description: Tipo ou categoria do produto
 *         preco:
 *           type: number
 *           description: Preço do produto
 *         dataCadastro:
 *           type: string
 *           format: date
 *           description: Data de cadastro do produto
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 */
router.get('/', listarProdutos);

/**
 * @swagger
 * /produtos/id/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 */
router.get('/id/:id', obterProdutoPorId);

/**
 * @swagger
 * /produtos/nome/{nome}:
 *   get:
 *     summary: Obtém um produto pelo Nome
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 */
router.get('/nome/:nome', obterProdutoPorNome);

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       400:
 *         description: Erro nos dados enviados
 */
router.post('/', criarProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produto'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       400:
 *         description: Erro nos dados enviados
 *       404:
 *         description: Produto não encontrado
 */
router.put('/:id', atualizarProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deleta um produto existente
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto a ser deletado
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.delete('/:id', deletarProduto);

module.exports = router;
