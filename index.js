const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const routes = require('./routes/routes')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)
MONGO_URI = process.env.MONGO_URI
PORT = process.env.PORT || 9000
mongoose.connect(MONGO_URI, { useNewUrlParser: true})
.then(() =>console.log("DB connected"))
.catch((err) => console.log(err.message))



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))