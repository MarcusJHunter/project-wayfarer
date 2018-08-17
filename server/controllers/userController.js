let db = require("../models");

// GET api/users

const getUsers = (req, res) => {
    db.User.find((err, users) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(users);
    });
};

const createUser = (req, res) => {
    console.log(req.body)

    db.User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }

        if(user){
            res.status(400).send('user already exists')
        }
        else{
            db.User.create(req.body, (err, user) => {
                if (err) {
                    console.log(err);
                    return err;
                }
                res.json(user);
            });
        }
        
    })
};

const getUser = (req, res) => {
    db.User.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(user);
    });
};

// PUT api/user/update/:username

const updateUser = (req, res) => {
    let email = req.params.email;
    let update = req.body;

    db.User.findOneAndUpdate(
        email, 
        update,
        {new: true}, 
        (err, user) => {
            if (err) {
                console.log(err);
                return err;
            }
            return res.json(user);
    })
}

module.exports = {
    getUser: getUser,
    updateUser: updateUser,
    getAll: getUsers,
    createUser: createUser
}