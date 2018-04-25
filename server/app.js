const express = require('express')
const PORT = 3000
const app = express()
const routeAPI = require('./routes/index')
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds031671.mlab.com:31671/blog`)


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected !!')
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', routeAPI)

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`)
})

module.exports = app