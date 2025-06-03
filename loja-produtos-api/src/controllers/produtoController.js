const Produto = require('../models/Produto');

// Listar todos os produtos
async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos', error });
  }
}

// Obter produto por ID
async function obterProdutoPorId(req, res) {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error });
  }
}

// Obter produto por nome
async function obterProdutoPorNome(req, res) {
  try {
    const produto = await Produto.findOne({ nome: req.params.nome });
    if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error });
  }
}

// Criar novo produto
async function criarProduto(req, res) {
  try {
    const novoProduto = new Produto(req.body);
    const salvo = await novoProduto.save();
    res.status(201).json(salvo);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar produto', error });
  }
}

// Atualizar produto existente
async function atualizarProduto(req, res) {
  try {
    const atualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(atualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar produto', error });
  }
}

// Deletar produto
async function deletarProduto(req, res) {
  try {
    const deletado = await Produto.findByIdAndDelete(req.params.id);
    if (!deletado) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
}

module.exports = {
  listarProdutos,
  obterProdutoPorId,
  obterProdutoPorNome,
  criarProduto,
  atualizarProduto,
  deletarProduto,
};
