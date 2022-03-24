const { response } = require('express');
const { Router } = require('express');
const categoryRouter = new Router;
const { category } = require("../models");
const { product } = require("../models");

// PATH /categories
categoryRouter.get('/:id', async (request, response) => {
	const { id } = request.params;
	try {
		const oneCategory = await category.findByPk(id);
		response.send(oneCategory);
	} catch (error) {
		response.status(500).send("Something went wrong");
	}
});

module.exports = categoryRouter;