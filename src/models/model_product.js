const { queryHelper } = require('../helpers/helper_query')

module.exports = {
	insertProduct: (data) => {
		return queryHelper('INSERT INTO product SET ?', data)
	},
	getAllProduct: (search, sort, order, limit, offset) => {
		return queryHelper(
			`SELECT * FROM product ${search ? `WHERE product.name LIKE %${search}%` : ''
			} ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`
		)
	},
	getProductById: (id) => {
		return queryHelper('SELECT product.* FROM product WHERE id = ?', id)
	},
	getSearch: (search) => {
		return queryHelper(
			'SELECT * FROM product WHERE name LIKE ?',
			`%${search}%`
		)
	},
	getTotal: () => {
		return queryHelper('SELECT COUNT(*) AS total FROM product')
	},
	editProduct: (data, id) => {
		return queryHelper('UPDATE product SET ? WHERE id = ?', [data, id])
	},
	removeProduct: (id) => {
		return queryHelper('DELETE FROM product WHERE id = ?', id)
	}
}
