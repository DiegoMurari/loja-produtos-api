# 🛒 API de Produtos – Loja de Departamentos

Esta é uma API REST desenvolvida para gerenciar produtos de uma loja de departamentos, como parte do trabalho acadêmico da disciplina **Desenvolvimento de Software para Web I**.

## 🌍 Link de Deploy

A API está online e pronta para ser testada:

👉 https://loja-produtos-api-production.up.railway.app

## 📄 Documentação Swagger

A documentação interativa está disponível em:

👉 https://loja-produtos-api-production.up.railway.app/api-docs

## 📦 Funcionalidades da API

- **[GET]** `/produtos` → Lista todos os produtos  
- **[POST]** `/produtos` → Cria um novo produto  
- **[GET]** `/produtos/id/{id}` → Busca um produto pelo ID  
- **[GET]** `/produtos/nome/{nome}` → Busca um produto pelo nome  
- **[PUT]** `/produtos/{id}` → Atualiza um produto existente  
- **[DELETE]** `/produtos/{id}` → Deleta um produto existente  

## 🧾 Exemplo de Produto

```json
{
  "nome": "Tênis Esportivo",
  "descricao": "Tênis leve para corrida",
  "cor": "Preto",
  "peso": 0.9,
  "tipo": "Calçado",
  "preco": 299.99,
  "dataCadastro": "2025-06-03"
}
