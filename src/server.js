const bodyParser= require('body-parser')
const express = require('express')
const starships = require('./controller/starships')
const connect = require('./database/connection')
const vehicles = require('./controller/vehicles')
require('dotenv').config();
const app = express()
app.use(bodyParser.json({ type: '*/*' }))


app.get('/', (req, res) => {
    res.json({message: `Server is up!`})
})
app.get('/starships/:id', starships.getById)
app.post('/starships/:id/set', starships.setCount)
app.get('/starships/:id/inc_dec', starships.incDecCount)
app.get('/vehicles/:id', vehicles.getById)
app.post('/vehicles/:id/set', vehicles.setCount)
app.get('/vehicles/:id/inc_dec', vehicles.incDecCount)
connect()



module.exports = app
