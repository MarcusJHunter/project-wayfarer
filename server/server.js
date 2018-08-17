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
app.get("/api/users", controllers.user.getAll);
app.get("/api/user/:email", controllers.user.getUser);
app.post("/api/user/post", controllers.user.createUser);
app.put("/api/user/update/:email", controllers.user.updateUser);
// app.get("/api/users/", controllers.user.show);
// app.get("/api/users/:username", controllers.user.find);
// app.get("/api/drinks/", controllers.drink.show);
// app.get("/api/drinks/:id", controllers.drink.find);

// app.post("/api/newuser", controllers.user.create);
// app.post("/api/:user/newdrink", controllers.drink.create);

// app.put("/api/user/update/:username", controllers.user.updateProfile);
// app.put("/api/user/add/:username/:drinkid", controllers.user.addDrinks);
// app.put("/api/user/remove/:username/:drinkname", controllers.user.removeDrinks);

// app.delete("/api/users/:username", controllers.user.removeProfile);

// ********** SERVER *********

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});