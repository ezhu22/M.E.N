const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static('public'));
app.get("/", (req, res) => {
    res.render('index');
});

app.get('/cars', (req, res) =>{
    res.render('cars');
});

app.get('/cats', (req, res) =>{
    res.render('cats');
});

app.get('/cars/new', (req, res) => {
    res.render('form');
});

app.get('./static/ford.jpg', (req, res) => {
    res.sendFile('/public/ford.jpg');
});



app.listen(7000, () => console.log('listening on port 7000'));