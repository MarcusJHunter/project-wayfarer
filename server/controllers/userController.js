let db = require("../models");

// GET api/users

const getUsers = (req, res) => {
    db.User.find({}, (err, users) => {
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

// POST api/user/find

const getUser = (req, res) => {
    console.log(req)
    db.User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
        if (err) {
            console.log(err);
            return err;
        }
        res.status(200).send("Succesful Call");
    });
};

// POST api/user/profile

const getProfile = (req, res) => {
    db.User.findOne({email: req.body.email}, (err, user) => {
        if (err){
            console.log(err);
            return err
        }
        res.status(200).send("Good Call");
    })
}

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
    getProfile: getProfile,
    updateUser: updateUser,
    getAll: getUsers,
    createUser: createUser
}
