jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productPutController = require("../../controllers/productPutController")

describe("Product Controller", () => {

  it('Should get an error', async () => {
    const reqMock = {
      body: { name },
      params: { id: '3' }
    }

    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productPutController(reqMock, resMock)

    //Verifica se houve resposta do controlador
    expect(resMock.json.mock.calls).toHaveLength(1)
    //Verifica se a função foi chamada
    expect(ProductModel.create).toHaveBeenCalledTimes(1)
  })

  it('Should be ablee created a new product with name and price', async() => {
    const reqMock = {
      body: { name: 'Notebook', price: 4500 }
    }

    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    ProductModel.create.mockReturnValue({ name: 'Notebook', price: 4500 })

    await productPostController(reqMock, resMock)

    expect(resMock.json).toHaveBeenCalledTimes(1)
    const response = resMock.json.mock.lastCall[0]
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('price')

  })
})