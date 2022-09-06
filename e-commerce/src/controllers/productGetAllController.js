const ProductModel = require("../models/products.js")

const productGetAllController = async (req, res) => {
  try {
    const allProducts = await ProductModel.find()
    res.json(allProducts);
  } catch (err) {
    res.status(500).send("Deu ruim")
    console.log(err);
  }
}

module.exports = productGetAllController