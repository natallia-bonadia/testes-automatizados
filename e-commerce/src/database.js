const mongoose = require("mongoose")
const { MONGO_URL } = require("./constants")

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("Conectado ao BANCO")
  } catch (e) {
    console.error(e)
    setTimeout(connect, 3000)
  }
}

connect()