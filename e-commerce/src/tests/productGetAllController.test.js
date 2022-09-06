const mongoose = require("mongoose")
const { MONGO_URI } = require("../constants")
const productGetAllController = require("../controllers/productGetAllController")

describe("Product Controller", () => {
  let conn;
  beforeAll(async () => {
    conn = await mongoose.connect(MONGO_URI)
  })

  it("Should be able to list all products", async() => {
    const req = {}
    let jsonFuncWasCalled;
    const res = {
      json: (list) => { jsonFuncWasCalled = list },
      status: () => {},
      send: () => {},
    }

    await productGetAllController(req, res)
        
    expect (jsonFuncWasCalled).toBeInstanceOf(Array)
    expect (jsonFuncWasCalled.length).not.toBe(0)
  })

  afterAll(() => {
    conn.disconnect()
  })
})