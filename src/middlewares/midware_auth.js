// package: jsonwebtoken
const { verify } = require("jsonwebtoken")
// helper: response
const { response } = require("../helpers/helper_resp")

module.exports = {
	verifyAccess: (req, res, next) => {
		let token = req.headers.authorization.split(" ")[1]
		verify(token, process.env.JWT_KEY, (err, _decoded) => {
			if (err) {
				response(res, [], 403, "Token is invalid", null, err)
			}
			next()
		})
	}
}
