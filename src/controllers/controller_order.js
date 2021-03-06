// model: order
const {
  insertOrderDetail,
  insertOrderItem,
  getAllOrder
} = require("../models/model_order")
// helper: response
const { response } = require("../helpers/helper_resp")

module.exports = {
  createOrder: async (req, res, next) => {
    const { id, total, tax, items } = req.body
    const payload = {
      user_id: id,
      total,
      tax,
      created_at: new Date()
    }
    try {
      const detail = await insertOrderDetail(payload)
      // console.log(detail)
      await insertOrderItem(detail.rows[0].id, id, items)
      response(res, [], res.statusCode, "Order(s) created successfully", null, null)
    } catch (error) {
      console.log(error)
      next({
        status: error.statusCode,
        message: "Failed to create the order(s)"
      })
    }
  },
  readAllOrder: (_req, res, next) => {
    getAllOrder()
      .then((result) => {
        // console.log(result)
        response(res, result.rows, res.statusCode, "Orders found", null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: "Orders not found"
        })
      })
  }
}
