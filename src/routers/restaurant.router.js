const { response } = require("express");
const express = require("express");
const Restaurant = require("../usescases/restaurant.usecase");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allRestaurants = await Restaurant.getAll();

    res.json(allRestaurants);
  } catch (error) {
    console.error(error);

    res.statusCode = 500;
    res.json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const newRestaurant = req.body;
    //console.log(newUser);
    const createdRestaurant = await Restaurant.createRestaurant(newRestaurant);

    res.statusCode = 201;
    res.json(createdRestaurant);
  } catch (error) {
    console.error(error);

    res.statusCode = 500;
    res.json({ error });
  }
});

module.exports = router;
