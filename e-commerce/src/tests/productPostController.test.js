const mongoose = require("mongoose")
const { MONGO_URI } = require("../constants")
const ProductModel = require("../models/products")
const productPostController = require("../controllers/productPostController")


describe("Product Controller", () => {
  let conn;
  beforeAll(async () => {
    conn = await mongoose.connect(MONGO_URI)
  })
  
  // beforeEach(async () => {
  //   await ProductModel.deleteMany()
  // })

  it('Should be able created a new product', async () => {
    
    const req = {
      body: { name: 'Batata', price: 2500 }
    }
    let response;
    const res = { 
      json: (newProduct) => { response = newProduct },
      status: () => {},
      send: () => {},
    }

    await productPostController(req, res)

    const allProducts = await ProductModel.find()

    expect(allProducts).toHaveLength(1)
    
  })
  
  afterAll(async () => {
    await conn.disconnect()
  })
})