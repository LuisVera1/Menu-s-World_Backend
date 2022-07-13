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
  //   gender: {
  //     type: String,
  //     enum: ["m", "f", "x"],
  //     maxlength: 1,
  //   },
  //   age: {
  //     type: Number,
  //     min: 0,
  //     max: 200,
  //   },
  //   profilePicture: String, // la URL de la Imagen, subida a otro lado
  //   posts: [mongoose.Types.ObjectId],
});

const User = mongoose.model("users", userSchema);

module.exports = User;
