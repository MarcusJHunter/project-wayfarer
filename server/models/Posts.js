let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema ({
    title: String,
    body: String,
    city: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

let Post = mongoose.model("Post", PostSchema);
 module.exports = Post;