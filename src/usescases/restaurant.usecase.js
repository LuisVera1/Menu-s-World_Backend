const Restaurant = require("../models/restaurant.model");

function getAll() {
  return Restaurant.find();
}

async function createRestaurant({
  username,
  restaurants,
  descriptionRestaurant,
  image_Url,
}) {
  return Restaurant.create({
    username,
    restaurants,
    descriptionRestaurant,
    image_Url,
  });
}

module.exports = {
  getAll,
  createRestaurant,
};
