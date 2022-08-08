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
	const obj = req.body;

	const now = new Date();
	const CompleteObj = {
		...obj,
		...{
			date: now,
			idUser: '62d53a3c7',
		},
	};

	const updateArrayComments = await Menu.addNewComment(id, CompleteObj);
	res.json(updateArrayComments);
});

module.exports = router;
