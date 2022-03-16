// helper: query
const {
  queryAction
} = require("../helpers/helper_query")

module.exports = {
  insertProduct: (payload) => {
    return queryAction(`INSERT INTO "product"
    (name, price, image, category_id, created_at) VALUES ($1, $2, $3, $4, $5)`,
      [payload.name, payload.price, payload.image, payload.category_id, payload.created_at]
    )
  },
  getSearch: (search) => {
    return queryAction(`SELECT * FROM "product" WHERE name LIKE $1`, [`%${search}%`])
  },
  getTotal: () => {
    return queryAction(`SELECT COUNT(*) AS total FROM "product"`)
  },
  getAllProduct: (search, sort, order, limit, offset) => {
    return queryAction(
      `SELECT * FROM "product" ${
				search ? `WHERE name LIKE %${search}%` : ""
			} ORDER BY ${sort} ${order} LIMIT ${limit} OFFSET ${offset}`
    )
  },
  getProductById: (id) => {
    return queryAction(`SELECT * FROM "product" WHERE id = $1`, [id])
  },
  editProduct: (payload, id) => {
    return queryAction(`UPDATE "product"
    SET name = $1, price = $2, image = $3, category_id = $4, updated_at = $5 WHERE id = $6`,
      [payload.name, payload.price, payload.image, payload.category_id, payload.updated_at, id])
  },
  removeProduct: (id) => {
    return queryAction(`DELETE FROM "product" WHERE id = $1`, [id])
  }
}
