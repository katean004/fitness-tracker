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
    required: true
  },

  //not sure what needs to go in here
  sets: {
    type: Number,
    required: true
  },

  //not sure what needs to go in here
  reps: {
    type: Number,
    required: true
  },

  //not sure what needs to go in here
  duration: {
    type: Number,
    required: true
  },

  exerciseCreated: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;