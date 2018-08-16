let db = require("../models");





// Post api/user

const getUser = (req, res) => {
    db.User.findOne({username: username}, (err, users) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(users);
    });
};