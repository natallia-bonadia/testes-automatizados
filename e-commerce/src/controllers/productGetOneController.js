const ProductModel = require("../models/products.js")

const productGetIdController = async (req, res) => {
  const { id } = req.params
  try {
      const product = await ProductModel.findById(id)
      res.json(product);
  } catch (err) {
      res.status(500).send("Deu ruim")

      console.log(err);
  }
}

module.exports = productGetIdController
