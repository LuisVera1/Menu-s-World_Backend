const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
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
  restaurants_Id: [
    {
      maxLength: 100,
      minLength: 4,
      trim: true,
      type: String,
    },
  ],
});

const Admin = mongoose.model("admins", AdminSchema);

module.exports = Admin;
