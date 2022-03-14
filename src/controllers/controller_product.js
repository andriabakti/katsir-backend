// model: product
const {
	insertProduct,
	getAllProduct,
	getProductById,
	getSearch,
	getTotal,
	editProduct,
	removeProduct
} = require("../models/model_product")
// helper: response
const { response, pageInfo } = require("../helpers/helper_resp")

module.exports = {
	createProduct: (req, res, next) => {
		const { name, price, category_id } = req.body
		const data = {
			name,
			price,
			image: req.file.path,
			category_id,
			created_at: new Date()
		}
		insertProduct(data)
			.then((_result) => {
				response(res, [], res.statusCode, `${name} created successfully`, null, null)
			})
			.catch((error) => {
				console.log(error)
				next({
					status: error.statusCode,
					message: `Failed to created ${name}`
				})
			})
	},
	readAllProduct: (req, res, next) => {
		const search = req.query.search || null
		const sort = req.query.sort || "id"
		const order = req.query.order || "DESC"
		const limit = Number(req.query.limit) || 12
		const page = Number(req.query.page) || 1
		const offset = (page === 0 ? 1 : page - 1) * limit

		if (search) {
			getSearch(search)
				.then((result) => {
					totalData = result.length
				})
				.catch((error) => {
					console.log(error)
				})
		} else {
			getTotal()
				.then((result) => {
					totalData = result[0].total
				})
				.catch((error) => {
					console.log(error)
				})
		}
		getAllProduct(search, sort, order, limit, offset)
			.then((result) => {
				const count = result.length
				const total = parseInt(totalData)
				const links = pageInfo(limit, page, total, count)
				response(res, result, res.statusCode, "Products found", links, null)
			})
			.catch((error) => {
				console.log(error)
				next({
					status: error.statusCode,
					message: "Products not found"
				})
			})
	},
	readProductById: (req, res, next) => {
		const { id } = req.params
		getProductById(id)
			.then((result) => {
				response(res, result, res.statusCode, "Product found", null, null)
			})
			.catch((error) => {
				console.log(error)
				next({
					status: error.statusCode,
					message: "Product not found"
				})
			})
	},
	updateProduct: (req, res, next) => {
		const { id } = req.params
		const { name, image, price, category_id } = req.body
		const data = {
			name,
			price,
			image: req.file ? req.file.path : image,
			category_id,
			updated_at: new Date()
		}
		editProduct(data, id)
			.then((_result) => {
				response(res, [], res.statusCode, "Product updated successfully", null, null)
			})
			.catch((error) => {
				console.log(error)
				next({
					status: error.statusCode,
					message: "Failed to update this product"
				})
			})
	},
	deleteProduct: (req, res, next) => {
		const { id } = req.params
		removeProduct(id)
			.then((_result) => {
				response(res, [], res.statusCode, "Product deleted successfully", null, null)
			})
			.catch((error) => {
				console.log(error)
				next({
					status: error.statusCode,
					message: "Failed to delete this product"
				})
			})
	}
}
