const express = require("express");
const Menu = require("../usecases/menu.usecase");

const router = express.Router();

router.get("/", async (req, res) => {
  const dishName = Number(req.query.dishName);
  const price = req.query.price;

  const filtro = {};

  const priceExist = !Number.isNaN(price);
  if (priceExist) {
    filtro.price = price; // {edad: edad}
  }

  const dishExist = dish !== undefined;
  if (dishExist) {
    filtro.dishName = dish; // {genero: genero}
  }

  const menus = await Menu.getMenus(filtro);

  res.json(menus);
});

router.post("/", async (req, res) => {
  const newMenu = await Menu.createMenu(req.body);

  res.statusCode = 201;
  res.json(newMenu);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const MenuInfo = req.body;

  const updatedMenu = await Menu.updateMenu(id, menuInfo);

  res.json(updatedMenu);
});

module.exports = router;
