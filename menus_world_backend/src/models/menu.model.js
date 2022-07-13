const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  dishName: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 4,
  },
  price: {
    type: Number,
    required: true,
    minlength: 4,
  },
});

const Menu = mongoose.model("menus", menuSchema);

module.exports = Menu;
