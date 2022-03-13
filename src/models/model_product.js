// helper: query
const {
  queryAction
} = require("../helpers/helper_query")

module.exports = {
  insertProduct: (data) => {
    return queryAction("INSERT INTO product SET ?", data)
  },
  getSearch: (search) => {
    return queryAction("SELECT * FROM product WHERE name LIKE ?", `%${search}%`)
  },
  getTotal: () => {
    return queryAction("SELECT COUNT(*) AS total FROM product")
  },
  getAllProduct: (search, sort, order, limit, offset) => {
    return queryAction(
      `SELECT * FROM product ${
				search ? `WHERE product.name LIKE %${search}%` : ""
			} ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`
    )
  },
  getProductById: (id) => {
    return queryAction("SELECT * FROM product WHERE id = ?", id)
  },
  editProduct: (data, id) => {
    return queryAction("UPDATE product SET ? WHERE id = ?", [data, id])
  },
  removeProduct: (id) => {
    return queryAction("DELETE FROM product WHERE id = ?", id)
  }
}
