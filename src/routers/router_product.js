// package: express
const express = require('express')
const router = express.Router()
// middleware: auth
const {
	verifyAccess
} = require('../middlewares/midware_auth')
// middleware: multer
const upload = require('../middlewares/midware_multer')
// controller: product
const {
	createProduct,
	readAllProduct,
	readProductById,
	updateProduct,
	deleteProduct
} = require('../controllers/controller_product')

router
	.post('/', verifyAccess, upload, createProduct)
	.get('/', verifyAccess, readAllProduct)
	.get('/:id', verifyAccess, readProductById)
	.patch('/:id', verifyAccess, upload, updateProduct)
	.delete('/:id', verifyAccess, deleteProduct)
module.exports = router