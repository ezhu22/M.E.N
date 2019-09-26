const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./config/mongoose');
const port = 8000;

app.use(session({
    secret: 'I solemly swear that I am up to no good',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'static')))
app.set(path.join('views', __dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

require('./config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`)
});
