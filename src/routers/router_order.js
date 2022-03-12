const express = require('express')
const router = express.Router()
const {
  createOrder,
  readAllOrder
} = require('../controllers/controller_order')
const {
  verifyAccess
} = require('../middlewares/midware_auth')

router
  .post('/', verifyAccess, createOrder)
  .get('/:id', verifyAccess, readAllOrder)
module.exports = router