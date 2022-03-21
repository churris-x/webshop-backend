const { Router } = require('express')
const productRouter = new Router
const { product } = require("../models")

// PATH /products
productRouter.get("/", async (request, response) => {
    try {
    const allProducts = await product.findAll()
    response.send(allProducts)
    }catch(error){
        console.log(error)
        response.status(500).send("oops")
    }
});
productRouter.get("/:id", async (request, response) => {
	const { id } = request.params;
	try {
		const oneProduct = await product.findByPk(id);
		response.send(oneProduct);
	} catch (error) {
		console.log('ERROR: product by id => ', error);
        response.status(500).send("oops");
	}
});

module.exports = productRouter