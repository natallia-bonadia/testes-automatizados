const ProductModel = require("../models/products.js")

const productPutController = async (req, res) => {
  const { id } = req.params
  const { name, price } = req.body

  try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(id, { name, price })
      res.json(updatedProduct);
  } catch (err) {
      res.status(500).send("Deu ruim")
      console.log(err);
  }
}

module.exports = productPutController
