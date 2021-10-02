const { Router } = require('express')
const {
	insertProduct,
	getAllProducts,
	getProductById,
	updateProduct,
	deleteProduct
} = require('../controllers/product_controller')
const routes = Router()

module.exports = routes
	.post('/', insertProduct)
	.get('/', getAllProducts)
	.get('/:id', getProductById)
	.patch('/:id', updateProduct)
	.delete('/:id', deleteProduct)
