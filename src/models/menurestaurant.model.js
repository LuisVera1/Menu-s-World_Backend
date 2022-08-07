const mongoose = require('mongoose');

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
	comments: [
		{
			user: { type: String },
			date: { type: Date },
			rating: { type: Number },
			comment: { type: String },
			idUser: {type: String}
		},
	],
	price: {
		type: Number,
		required: true,
		minlength: 2,
	},
	image_URL: String,
});

const Menu = mongoose.model('menus', MenuSchema);

module.exports = Menu;

/*
{
	"user": "Oliver Alejandro",
	"date": "2022-08-07T07:47:22",  GMT -5
	"rating": 5,
	"idComment": 1,
	"comment": "Muy bueno, perfectamente cocido",
	"idUser": "62d53a3c7"
}
*/
