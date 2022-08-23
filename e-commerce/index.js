const express = require('express')
const app = express()

const productsList = [
  {id: 0, name: 'televisao', preco: 3000},
  {id: 1, name: 'ssd', preco: 1000}
]

app.use(express.json())

app.get('/products', (req, res) => {
  res.json(productsList)
})

app.get('/products/:id', (req, res) => {
  const productId = req.params.id
  res.json(productsList[productId])
})

app.post('/products', (req, res) => {
  const newProduct = req.body
  productsList.push(newProduct)
  res.json(newProduct)
})





app.listen(4000, () => {
  console.log(`Server running at port 4000`)
})

