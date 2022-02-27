require('dotenv').config()
const express = require('express')
const { urlencoded, json, static } = require('express')
const logger = require('morgan')
const cors = require('cors')

const routes = require('./src/routers/')
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

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
