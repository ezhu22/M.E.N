const Quote = require('../models/quote');

module.exports = {
    
    index: function(req, res){
        res.render('index')
    },

    create: function(req, res){
        console.log('attempting to create new quote')
        console.log(req.body)

        const quote = new Quote();
        quote.name = req.body.name;
        quote.content = req.body.content;
        quote.save()
            .then(newQuoteData => console.log('Quote added:', newQuoteData))
            .catch(err => console.log(err));
        
            res.redirect('/quotes');
    },

    show: function(req, res){
        console.log('pulling all the quotes')
        var quotes = Quote.find({}, function(err, quotes){
            res.render('quotes', {all_quotes: quotes});
        });
    }
}

