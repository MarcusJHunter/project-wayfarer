// ************ SERVER JS ***********

// Set up express

const express = require("express");
const app = express();
app.use(express.json());
// Set up body parser

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// CORS

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Allow express to use public files

let db = require("./models");
let controllers = require("./controllers");

// ******** ROUTES ***********
// API Endpoints

// ------- Users -------
app.get("/api/users", controllers.user.getAll);
app.post("/api/user/find", controllers.user.getUser);
app.post("api/user/profile", controllers.user.getProfile);
app.post("/api/user/create", controllers.user.createUser);
app.put("/api/user/update/:email", controllers.user.updateUser);


// ------- Posts -------
app.get("/api/posts", controllers.post.getPosts);
app.post("/api/posts/create/:email", controllers.post.createPost);
app.put("/api/posts/update/:postId", controllers.post.updatePost);
app.delete("/api/posts/delete/:postId", controllers.post.deletePost);



// ********** SERVER *********

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
