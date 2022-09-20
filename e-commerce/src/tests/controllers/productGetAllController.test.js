jest.mock("../../models/products")
const productGetAllController = require("../../controllers/productGetAllController")
const ProductModel = require("../../models/products")

describe("Product Controller", () => {

  it("Should be able to list all products", async() => {
    const reqMock = {}
    
    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productGetAllController(reqMock, resMock)
        
    expect(ProductModel.find).toHaveBeenCalledTimes(1)
    expect(resMock.json.mock.calls).toHaveLength(1)
  })

})