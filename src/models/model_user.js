// helper: query
const {
  queryAction
} = require("../helpers/helper_query")

module.exports = {
  createUser: (payload) => {
    return queryAction(`INSERT INTO "user"
    (email, password, role, username, created_at) VALUES ($1, $2, $3, $4, $5)`,
      [payload.email, payload.password, payload.role, payload.username, payload.created_at]
    )
  },
  getUserByEmail: (payload) => {
    return queryAction(`SELECT * FROM "user" WHERE email = $1`, [payload])
  }
}
