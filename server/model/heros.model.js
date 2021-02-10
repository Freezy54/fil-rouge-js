const mongoose = require('mongoose');

var herosSchema = mongoose.Schema({
    heroName: String,
    heroVie: String
});

var Hero = mongoose.model('hero', herosSchema);
module.exports = Hero;

