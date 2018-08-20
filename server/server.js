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
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Allow express to use public files

let db = require("./models");
let controllers = require("./controllers");

// ******** ROUTES ***********
// API Endpoints

// ------- Users -------
app.get("/api/users", controllers.user.getAll);
app.get("/api/user/:email", controllers.user.getUser);
app.post("/api/user/create", controllers.user.createUser);
app.put("/api/user/update/:email", controllers.user.updateUser);


// ------- Posts -------
app.get("/api/posts", controllers.post.getPosts);
app.post("/api/posts/create", controllers.post.createPost);



// ********** SERVER *********

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});