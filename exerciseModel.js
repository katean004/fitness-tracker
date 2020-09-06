const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Exercise name is required"
  },

  //not sure what needs to go in here
  weight: {
    type: Number,
    trim: true,
    required: "Weight is required"
  },

  //not sure what needs to go in here
  sets: {
    type: Number,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  //not sure what needs to go in here
  reps: {
    type: Number,
    default: Date.now
  },

  //not sure what needs to go in here
  duration: {
    type: Number,
    default: Date.now
  },

  exerciseCreated: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;