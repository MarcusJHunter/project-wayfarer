let db= require ("./models")


// get api/allposts

const getPosts = (req,res)=> {
  db.Post.find ({}, (err) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.json(posts);
  });
};


const createPost = (req, res) => {
  console.log(req.body)

  db.Post.create(req.body, (err, post) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.json(post);
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
