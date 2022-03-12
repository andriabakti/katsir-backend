const { queryAction } = require('../helpers/helper_query')

module.exports = {
  insertOrderDetail: (payload) => {
    return queryAction('INSERT INTO order_detail SET ?', payload)
  },
  insertOrderItem: (order, id, payload) => {
    return queryAction(`
    INSERT INTO order_item (order_id, user_id, product_id, quantity, crated_at) VALUES ?`,
      [payload.map(item => [order, id, item.id, item.quantity, new Date()])])
  },
  getAllOrder: () => {
    return queryAction(`
    SELECT order_item.*, product.* FROM order_item
    INNER JOIN product ON order_item.product_id = product.id
    WHERE order_item.user_id = ${id}`)
  }
}