const express = require("express");
const Menu = require("../usescases/menu.usecase");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allMenu = await Menu.getMenus();

    res.json(allMenu);
  } catch (err) {
    console.error(err);

    res.statusCode = 500;
    res.json({ err });
  }
});

router.post("/", async (req, res) => {
  const newMenu = await Menu.createMenu(req.body);

  res.statusCode = 201;
  res.json(newMenu);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const MenuInfo = req.body;

  const updatedMenu = await Menu.updateMenu(id, MenuInfo);

  res.json(updatedMenu);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const menuInfo = req.body;

  const deleteMenu = await Menu.deleteMenu(id, menuInfo);

  res.json(deleteMenu);
});

module.exports = router;
