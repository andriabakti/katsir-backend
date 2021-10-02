const { Router } = require('express')
const routes = Router()

module.exports = routes
	.post('/', (_req, res) => {
		res.send('INSERT Product !!')
	})
	.get('/', (_req, res) => {
		res.send('GET All Products !!')
	})
	.get('/:id', (_req, res) => {
		res.send('GET Products by ID !!')
	})
	.patch('/:id', (_req, res) => {
		res.send('UPDATE Product !! ')
	})
	.delete('/:id', (_req, res) => {
		res.send('DELETE Product !!')
	})
