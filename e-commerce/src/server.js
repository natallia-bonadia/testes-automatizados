const { productRouter } = require("./routes/index")
const { PORT } = require("./constants")
const express = require("express")
const server = express()

server.use(express.json())

server.use("/products", productRouter)

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})