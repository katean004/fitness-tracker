if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index.js");
const exerciseRouter = require("./routes/exercise.js");
const statsRouter = require("./routes/stats.js");


const PORT = process.env.PORT || 3000;

//Do I have to make multiple models for each collection? or is it one model per database?
const Exercise = require("./exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create initial root route 
app.use(express.static("public"));

//might have to change the db name depending on what i call it
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


app.get('/exercise', exerciseRouter);



// app.route('/api/workouts')
//   .get(function (req, res) {
//     //res.send database (JSON version of workout from Schema from .find())
//     res.send('Get a random book')
//   })
//   .post(function (req, res) {
//     res.send('Add a book')
//   })
//   .put(function (req, res) {
//     res.send('Update the book')
//   })

//set up get route to api
// app.get('api/workouts', function (req, res) {

// });

//set up post route to api
app.post("/submit", ({ body }, res) => {
  Exercise.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

//set up put route to api


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
