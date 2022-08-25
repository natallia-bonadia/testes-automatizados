const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

const productsList = [
  {id: 0, name: 'televisao', preco: 3000},
  {id: 1, name: 'ssd', preco: 1000},
  {id: 2, name: 'hd', preco: 400}
]

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.get('/products', (req, res) => {
  res.json(productsList)
})

app.get('/products/:id', (req, res) => {
  const productId = req.params.id
  const product = productsList.find(e => e.id == productId)
  res.json(product)
})

app.post('/products', (req, res) => {
  const newProduct = req.body
  productsList.push(newProduct)
  res.json(newProduct)
})

app.delete('/products/:id', (req, res) => {
  const productId = req.params.id
  const product = productsList.find(e => e.id == productId)
  const index = productsList.indexOf(product)
  productsList.splice(index, 1)
  res.json(productsList)
})

app.put('')





mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.v4cwgf8.mongodb.net/bancodedados?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectamos ao Banco de Dados')
    app.listen(4000)
  })
  .catch(err => console.log(err));



