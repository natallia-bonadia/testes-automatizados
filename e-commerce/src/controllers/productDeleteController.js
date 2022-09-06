const ProductModel = require("../models/products.js")

const productDeleteController = async (req, res) => {
  const { id } = req.params
  try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id)
      res.json(deletedProduct);
  } catch (err) {
      res.status(500).send("Deu ruim")

      console.log(err);
  }
}

module.exports = productDeleteController