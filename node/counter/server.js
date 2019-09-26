const express = require('express')
const app = express();
const session = require('express-session')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(session({
    secret: 'counter counts for success',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {
    if (req.session.id == null){
        req.session.count = 0
        req.session.id = 1
    }
    res.render('index', {count: req.session.count})
})

app.post('/count', (req, res) => {
    console.log("the session id is: " + req.session.id)
    if (req.session.id == req.session.id){
        console.log('session id matched!')
        req.session.count += 1
        console.log('this is the count: ' + req.session.count)
        res.redirect('/')
    }
    else{
        console.log('session id did not match')
        req.session.count = 0;
        res.redirect('/')
    }
})

app.post('/count2', (req, res) => {
    console.log("the session id is: " + req.session.id)
    if (req.session.id == req.session.id){
        console.log('session id matched!')
        req.session.count += 2
        console.log('this is the count: ' + req.session.count)
        res.redirect('/')
    }
    else{
        console.log('session id did not match')
        req.session.count = 0;
        res.redirect('/')
    }
})

app.post('/reset', (req, res) => {
    req.session.count = 0;
    console.log('Reset counter to: ' + req.session.count)
    res.redirect('/')
})

app.listen('7000', () => console.log('Listening on 7000'))