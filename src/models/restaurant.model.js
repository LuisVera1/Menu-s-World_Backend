const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 20,
    requiere: true,
  },
  restaurants: {
    type: String,
  },
  descriptionRestaurant: {
    type: String,
  },
  image_Url: { type: String },
});

const Restaurant = mongoose.model("restaurants", RestaurantSchema);

module.exports = Restaurant;
