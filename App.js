require('dotenv').config()
const express = require('express')
const { urlencoded, json, static } = require('express')
const logger = require('morgan')
const cors = require('cors')

const routes = require('./src/routers/')
const { response } = require('./src/helpers/helper_resp')
const port = process.env.PORT || 3939
const app = express()

app.use(
	urlencoded({
		extended: false
	}),
	json()
)
app.use(cors())
app.use(logger('dev'))
app.use('/api/v1', routes)
app.use('/uploads', static('./uploads'))

// app.use((err, _req, res, _next) => {
// 	const statusCode = err.status || 500
// 	const message = err.message || 'Internal Server Error'
// 	response(res, null, statusCode, message, null, error)
// })

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
