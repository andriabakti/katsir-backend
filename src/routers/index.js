// pkgs: express
const express = require('express')
const router = express.Router()
// modules: route
const userRoutes = require('./router_user')
const productRoutes = require('./router_product')
const categoryRoutes = require('./router_category')
// const orderRoutes = require('./router_order')

router
  .use('/user', userRoutes)
  .use('/product', productRoutes)
  .use('/category', categoryRoutes)
// .use('/order', orderRoutes)
module.exports = router