const { response } = require('../helpers/helper_resp')
const {
  insertOrderDetail,
  insertOrderItem,
  getAllOrder
} = require('../models/model_order')
module.exports = {
  createOrder: async (req, res) => {
    const { id, total, items } = req.body
    const payload = {
      user_id: id,
      total,
      created_at: new Date()
    }
    try {
      const result = await insertOrderDetail(payload)
      console.log(result);
      await insertOrderItem(result.insertId, id, items)
      response(res, [], res.statusCode, "All order(s) created successfully", null, null)
    } catch (error) {
      response(res, [], error.statusCode, 'Orders failed to create', null, error)
    }
  },
  readAllOrder: (req, res) => {
    const { id } = req.params
    getAllOrder(id)
      .then((result) => {
        response(res, result, res.statusCode, "Orders found", null, null)
      })
      .catch((error) => {
        console.log(error);
        response(res, [], error.statusCode, "Orders not found", null, error)
      })
  }
}