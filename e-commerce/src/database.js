const mongoose = require("mongoose")
const { MONGO_URI, PORT } = require("./constants")

const connect = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Conectado ao BANCO")
    } catch(e) {
        console.error(e)
        setTimeout(connect, PORT)
    }
}
connect()


  