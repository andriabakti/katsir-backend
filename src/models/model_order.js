// helper: query
const {
  queryAction
} = require('../helpers/helper_query')

module.exports = {
  insertOrderDetail: (payload) => {
    return queryAction('INSERT INTO order_detail SET ?', payload)
  },
  insertOrderItem: (order_id, user_id, payload) => {
    return queryAction(`
    INSERT INTO order_item (order_id, user_id, product_id, quantity, created_at) VALUES ?`,
      [payload.map(item => [order_id, user_id, item.id, item.quantity, new Date()])])
  },
  getAllOrder: () => {
    return queryAction(`
    SELECT order_detail.*, order_item.* FROM order_detail
    INNER JOIN order_item ON order_detail.id = order_item.order_id`)
  }
}