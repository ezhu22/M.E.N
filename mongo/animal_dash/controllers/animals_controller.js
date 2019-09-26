const Animal = require('../models/animal');
// const ObjectId = require('mongodb').ObjectId;

module.exports = {
    
    index: function(req, res){
        console.log('pulling all the animals')
        var animals = Animal.find({}, function(err, animals){
            res.render('index', {all_animals: animals});
        });
    },

    show: function(req, res){
    },

    new: function(req, res){
        console.log('making a new animal');
        res.render('new');
    },

    create: function(req, res){
        console.log('starting attempt to create animal')
        console.log(req.body)

        const animal = new Animal();
        animal.species = req.body.species;
        animal.name = req.body.name;
        console.log(animal)
        animal.save()
            .then(newAnimalData => console.log('animal added:', newAnimalData))
            .catch(err => console.log(err));
        
            res.redirect('/');
    },

    edit: function(req, res){
        Animal.findOne({ _id: req.params.id})
            .then(response =>{
                console.log('pulled animal', response);
                res.render('edit', {current_animal : response})
            })
            .catch(error=>{
                console.log("could not find animal")
            })
        

    },

    update: function(req, res){
        console.log('this is the form data', req.body)
        Animal.findOne({ _id: req.body.id})
            .then(animal =>{
                console.log('this is before changes', animal)
                animal.species = req.body.species;
                animal.name = req.body.name;
                return animal.save();
            })
            .then(saveResult =>{
                console.log('update was successful', saveResult);
                res.redirect('/')
            })
            .catch(error =>{
                console.log('update failed')
                res.redirect('/')
            });
        
    },

    destroy: function(req, res){
        Animal.deleteOne({ _id : req.params.id })
            .then(deleteAnimal =>{
                console.log('Animal removed from db', deleteAnimal)
                res.redirect('/')
            })
            .catch(error =>{
                console.log('Unable to delete.')
                res.redirect('/')
            
            });
    }

}

