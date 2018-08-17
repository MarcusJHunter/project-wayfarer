const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/wayfarer",
    { useNewUrlParser: true }
);

let Users = require("./Users");
let Posts = require("./Posts");

module.exports = {
    User: Users,
    Post: Posts
};