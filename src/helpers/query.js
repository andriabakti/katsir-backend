const pool = require('../configs/connection')
const { errors } = require('./responses')

module.exports = {
	queryHelper: (...args) => {
		return new Promise((resolve, reject) => {
			pool.query(...args, (err, res) => {
				if (!err) {
					if (res.length <= 0 || res.affectedRows === 0) {
						const objError = errors.notFound
						reject(objError)
					} else {
						resolve(res)
					}
				} else {
					const objError = {
						...err,
						statusCode: errors.checkStatusCode(err.errno)
					}
					reject(objError)
				}
			})
		})
	}
}
