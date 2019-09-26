const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    species: String,
    name: String
}, {timestamps: true});

const Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;