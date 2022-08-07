const Menu = require('../models/menurestaurant.model');

async function getDish(id) {
	const menus = await Menu.findById(id);
	return menus;
}

async function addNewComment(id, newObj) {
	await Menu.findByIdAndUpdate(id, { $push: { comments: newObj } });
	const updatedMenu = await Menu.findById(id);
	return updatedMenu;
}

module.exports = {
	getDish,
	addNewComment,
};
