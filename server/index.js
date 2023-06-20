const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');

// the arguement here references the cluster we created (our Mongo Database)
mongoose.connect(
  "mongodb+srv://jackskates:smudge14@cluster0.ufdlybw.mongodb.net/learnmern?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(async (err, result) => {
    if (err) {
      console.error(err);
    } 
    res.status(200).json(result);
  })
  console.log(result);
});


// this lets express listen to local port 3001 and start the backend server
// within package.json we also added a new start script which calls nodemon
// this allows the server to restart as changes are made. Starts with npm start
app.listen(3001, () => {
  console.log('SERVER RUNS');
});
