jest.mock("../../models/products")
const ProductModel = require("../../models/products")

describe("Product Service", () => {
  it("should be interact with product model", async () => {
    ProductModel.exists()
    expect(ProductModel.exists).toHaveBeenCalled()
  })
})