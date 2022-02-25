const {
  queryHelper
} = require('../helpers/helper_query')

module.exports = {
  createUser: (data) => {
    return queryHelper('INSERT INTO users SET ?', data)
  },
  getUserByEmail: (email) => {
    return queryHelper('SELECT * FROM users WHERE email ?', email)
  }
}