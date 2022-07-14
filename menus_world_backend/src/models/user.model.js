const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    lowercase: true,
    maxLength: 100,
    minLength: 4,
    required: true,
    trim: true,
    type: String,
    unique: true,
  },
  email: {
    lowercase: true,
    maxLength: 100,
    minLength: 7,
    required: true,
    trim: true,
    type: String,
    unique: true,
  },
  pass: {
    maxLength: 30,
    minLength: 8,
    required: true,
    trim: true,
    type: String,
  },
  comments: {
    type: Array,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
