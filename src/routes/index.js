const { Router } = require('express')
const productRoutes = require('./product_routes')
const routes = Router()

module.exports = routes.use('/products', productRoutes)
