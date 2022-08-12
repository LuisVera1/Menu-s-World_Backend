const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 20,
    requiere: true,
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

  userType: {
    type: String,
    minlength: 4,
    maxlength: 50,
  },
  restaurants: [
    {
      maxLength: 100,
      minLength: 4,
      trim: true,
      type: Array,
    },
  ],
  coments: [
    {
      maxLength: 100,
      minLength: 4,
      trim: true,
      type: Array,
    },
  ],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
