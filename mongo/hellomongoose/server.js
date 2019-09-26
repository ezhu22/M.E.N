const express = require('express');
const app = express();

const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('./config/mongoose')
const port = 8000

app.use(express.static(path.join(__dirname, 'static')))

app.set(path.join('views', __dirname, 'views'))

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true})) // THIS IS IMPORTANT

require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`)
})

