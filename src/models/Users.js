let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    username: String,
    name: String,
    location: String,
    password: String,
    joinDate: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    userImg: String,
})
let User = mongoose.model('User', UserSchema);
module.exports = User;