require('dotenv').config()

const { PORT,
    MONGO_URL,
} = process.env

module.exports = {
    PORT,
    MONGO_URL,
}