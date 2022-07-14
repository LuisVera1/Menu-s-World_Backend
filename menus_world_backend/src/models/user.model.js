const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
