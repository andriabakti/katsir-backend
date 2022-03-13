// helper: query
const {
  queryAction
} = require('../helpers/helper_query')

module.exports = {
  createUser: (data) => {
    return queryAction('INSERT INTO user SET ?', data)
  },
  getUserByEmail: (email) => {
    return queryAction('SELECT * FROM user WHERE email = ?', email)
  }
}