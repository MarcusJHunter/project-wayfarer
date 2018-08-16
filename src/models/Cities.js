var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema ({
    name: String,
    cityImg: String,
})

module.exports = mongoose.model('Cities', CitySchema);