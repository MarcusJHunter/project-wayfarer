let db= require ("../models")


// get api/posts

const getPosts = (req,res)=> {
  db.Post.find ({}, (err, posts) => {
    if (err) {
      console.log(err);
      return err;
    }else{
      res.json(posts);
    }
  });
};

// GET Api/posts/city

const getCitiesPosts = (req, res) => {
  db.Post.find(cityName,)
}

// post api/posts/create

const createPost = (req, res) => {
  console.log('req.body',req.body);
  db.Post.create(req.body, (err, newPost) => {
    console.log('newPost', newPost);
    if (err) {
      res.send(err);
    }else{
      db.User.findOne({email: req.params.email}, (err, foundUser) => {
        if (err) {
          console.log(err);
          res.send(err);
        }else{
          if(foundUser){
            newPost.user = foundUser._id;
            newPost.save();
            res.status(200).json(newPost);
          }else{
            res.status(404).send('user not found');
          }
        }
      })  
    }
  });
};




const updatePost = (req, res) => {
  let title = req.params.title;
  let update = req.body;

  db.Post.findOneAndUpdate(
    title,
    email,
    {new: true},
    (err, user) => {
      if (err) {
        console.log(err);
        return err;
      }
      return res.json(post);
    });
};

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
  updatePost: updatePost
}
