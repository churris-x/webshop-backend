const { Router } = require('express');
const { category } = require("../models");

const categoryRouter = new Router;

// PATH /categories
categoryRouter.get('/:id', async (request, response) => {
	const { id } = request.params;
	
	if (!id) return response.status(400).send('No id!');

	try {
		const oneCategory = await category.findByPk(id);
		response.send(oneCategory);
	} catch (error) {
		response.status(500).send("Something went wrong");
	}
});

module.exports = categoryRouter;