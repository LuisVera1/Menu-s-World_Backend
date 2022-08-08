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
  comments: {
    type: Array,
  },
  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  image_Url:{
    type: String
  }
});

const Menu = mongoose.model("menus", MenuSchema);

module.exports = Menu;
