// package: pg-format
const format = require("pg-format")
// helper: query
const {
  queryAction
} = require("../helpers/helper_query")

module.exports = {
  insertOrderDetail: (payload) => {
    return queryAction(`INSERT INTO "order_detail"
      (user_id, total, tax, created_at) VALUES ($1, $2, $3, $4) RETURNING id`,
      [payload.user_id, payload.total, payload.tax, payload.created_at])
  },
  insertOrderItem: (order_id, user_id, payload) => {
    const data = payload.map(({ id, quantity }) => {
      return [order_id, user_id, id, quantity, new Date()]
    })
    return queryAction(format(`INSERT INTO "order_item"
    (order_id, user_id, product_id, quantity, created_at) VALUES %L`,
      data
    ))
  },
  getAllOrder: () => {
    return queryAction(`
    SELECT order_detail.*, order_item.* FROM "order_detail"
    INNER JOIN "order_item" ON order_detail.id = order_item.order_id
		`)
  }
}
