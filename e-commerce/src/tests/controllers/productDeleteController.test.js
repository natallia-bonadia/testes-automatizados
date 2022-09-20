jest.mock("../../models/products")
const productDeleteController = require("../../controllers/productDeleteController")
const ProductModel = require("../../models/products")

describe("Product Controller", () => {

  it("Should be able to delete the product", async() => {
    const reqMock = {params: {id: "3"}}
    
    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productDeleteController(reqMock, resMock)
    
    expect(ProductModel.findByIdAndDelete).toHaveBeenLastCalledWith(reqMock.params.id)
  })
})