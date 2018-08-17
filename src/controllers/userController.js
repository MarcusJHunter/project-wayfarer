let db = require("../models");





// POST api/user

const getUser = (req, res) => {
    db.User.findOne({username: username}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(user);
    });
};

// PUT api/user

const updateProfile = (req, res) => {
    db.User.findByIdAndUpdate(req.params.todoId, req.body, {new: true}, (err, update_ => {
        if (err) {
            console.log(err)
            return err;
        }
        return res.json(update);
    })