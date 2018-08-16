var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: String,
    location: String,
    password: String,
    joinDate: String,
    post: [],
    userImg: String,
})

module.exports = mongoose.model('Users', UserSchema);