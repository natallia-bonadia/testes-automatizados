const ProductModel = require("../models/products.js")

const productPostController = async (req, res) => {
  const { name, price } = req.body;
  try {
    const newProduct = await ProductModel.create({ name, price });
    res.json(newProduct);
  } catch (err) {
    res.status(500).send("Deu ruim")
    console.log(err);
  }
}

module.exports = productPostController