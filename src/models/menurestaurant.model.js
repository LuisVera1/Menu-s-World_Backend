const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
  },
  dishName: {
    type: String,
    minlength: 4,
    maxlength: 100,
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
  comments: [
    {
      user: { type: String },
      date: { type: Date },
      rating: { type: Number },
      comment: { type: String },
      idUser: { type: String },
    },
  ],

  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  image_Url: {
    type: String,
  },
});

const Menu = mongoose.model("menus", MenuSchema);

module.exports = Menu;
