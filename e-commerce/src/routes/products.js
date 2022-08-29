const { Router } = require("express")
const productRouter = new Router()
const ProductModel = require("../models/products.js")

productRouter.get('/', async (req, res) => {
    try {
        const allProducts = await ProductModel.find()
        res.json(allProducts);
    } catch (err) {
        res.status(500).send("Deu ruim")
        
        console.log(err);
      }

})
  
productRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await ProductModel.findById(id)
        res.json(product);
    } catch (err) {
        res.status(500).send("Deu ruim")
        
        console.log(err);
    }
})
  
productRouter.post('/', async (req, res) => {

    const name = req.body.name;
    const price = req.body.price;
    
    try {
      const newProduct = await ProductModel.create({name, price});
      res.json(newProduct);
    } catch (err) {
      res.status(500).send("Deu ruim")
      
      console.log(err);
    }
      
})
  
productRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        res.json(deletedProduct);
    } catch (err) {
        res.status(500).send("Deu ruim")
        
        console.log(err);
    }
})
  
productRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    const price = req.body.price;

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, {name, price})
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send("Deu ruim")
        console.log(err);
    }
})

module.exports = productRouter