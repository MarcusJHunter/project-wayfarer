var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema ({
    title: String,
    body: String,
    user: {
        type: String,
        ref: Types.name
    },
    city: {
        type: String,
        ref: Types.name
    },
})

module.exports = mongoose.model('Posts', PostSchema);