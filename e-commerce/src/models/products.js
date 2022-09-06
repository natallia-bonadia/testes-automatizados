const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

const ProductModel = mongoose.model("Products", ProductSchema)



module.exports = ProductModel