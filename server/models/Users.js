let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    email: String,
    name: String,
    location: String,
    password: String,
    joinDate: {
        type: Date,
        default: Date.now
    },
    userImg: String,
})
let User = mongoose.model('User', UserSchema);
module.exports = User;
