const { Router } = require('express')
const producstRoute = require('./products.routes')
const routes = Router()

module.exports = routes.use('/', producstRoute)
