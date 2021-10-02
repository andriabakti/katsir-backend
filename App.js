require('dotenv').config()
const express = require('express')
const { urlencoded, json } = require('express')
const logger = require('morgan')
const cors = require('cors')
const routes = require('./src/routes')

const app = express()

app.use(
	urlencoded({
		extended: false
	}),
	json()
)
app.use(logger('dev'))
app.use(cors())

app.use('/api/v1', routes)

const port = process.env.PORT || 3939
app.listen(port, () => {
	console.log(`Server is running !!!`)
})

//Run app, then load http://localhost:port in a browser to see the output.
