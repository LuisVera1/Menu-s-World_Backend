const Menu = require("../models/menurestaurant.model");

async function getMenus(filter) {
  const menus = await Menu.find(filter);

  return menus;
}

async function createMenu(menu) {
  const newMenu = new Menu(menu); // Instancia de modelo Koder

  await Menu.create(newMenu);

  return newMenu;
}

async function updateMenu(id, menu) {
  const filter = {
    id: id,
  };

  await Menu.findOneAndUpdate(filter, menu);

  const updatedMenu = Menu.findOne(filter);

  return updatedMenu;
}

async function deleteMenu(id, menu) {
  const filter = {
    _id: id,
  };

  await Menu.findOneAndDelete(filter, menu);

  const updatedMenu = Menu.findOne(filter);

  return updatedMenu;
}

module.exports = {
  getMenus,
  createMenu,
  updateMenu,
  deleteMenu,
};
