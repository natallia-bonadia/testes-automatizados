const mongoose = require("mongoose")
const { MONGO_URI } = require("../constants")
const productDeleteController = require("../controllers/productDeleteController")
const ProductModel = require("../models/products")

describe("Product Controller", () => {
  let conn;
  beforeAll(async () => {
    conn = await mongoose.connect(MONGO_URI)
  })

  it("Should be able to list all products", async() => {
    const req = {params: {id: "631697a5bb05b32e312bfa83"}}
    
    const res = {
      json: () => {},
      status: () => {},
      send: () => {},
    }

    await productDeleteController(req, res)

    const allProducts = await ProductModel.find()
    
    expect(allProducts).toHaveLength(0)
    // expect (jsonFuncWasCalled).toBeInstanceOf(Array)
    // expect (jsonFuncWasCalled.length).not.toBe(0)
  })

  afterAll(() => {
    conn.disconnect()
  })
})