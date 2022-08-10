const express = require('express');
const Menu = require('../usescases/detalle.usecase');

const router = express.Router();

router.get('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const readDish = await Menu.getDish(id);
		res.json(readDish);
	} catch (err) {
		console.error(err);
		res.statusCode = 500;
		res.json({ err });
	}
});

router.patch('/:id', async (req, res) => {
	const id = req.params.id;
	const data = req.body;
	try{
		const updateArrayComments = await Menu.addNewComment(id, data);
		res.json(updateArrayComments);
	} catch (err) {
		res.statusCode = 500;
		res.json({ err });
	}
});

module.exports = router;
