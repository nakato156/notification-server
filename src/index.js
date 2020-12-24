 require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors'); //añadido modulo cors
const app = express()

// Setings
app.use(cors())
app.set("port", process.env.PORT || 3000)

// Midelware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

app.listen(app.get("port"))
console.log(`Servidor en el puerto ${app.get("port")}`)