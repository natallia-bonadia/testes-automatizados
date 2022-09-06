const { Router } = require("express")
const productRouter = new Router()
const ProductModel = require("../models/products.js")
const productGetIdController = require("../controllers/productGetIdController")
const productPostController = require("../controllers/productPostController")
const productDeleteController = require("../controllers/productDeleteController")
const productGetAllController = require("../controllers/productGetAllController")

productRouter.get('/', productGetAllController)

productRouter.get('/:id', productGetIdController)

productRouter.post('/', productPostController)

productRouter.delete('/:id', productDeleteController)

productRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    const price = req.body.price;

    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, { name, price })
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send("Deu ruim")
        console.log(err);
    }
})

module.exports = productRouter