const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
