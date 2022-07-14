const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  dishName: {
    type: String,
    minlength: 4,
    maxlength: 20,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
});

const Menu = mongoose.model("menus", MenuSchema);

module.exports = Menu;
