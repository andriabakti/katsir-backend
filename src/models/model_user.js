const {
  queryHelper
} = require('../helpers/helper_query')

module.exports = {
  createUser: (data) => {
    return queryHelper('INSERT INTO user SET ?', data)
  },
  getUserByEmail: (email) => {
    return queryHelper('SELECT * FROM user WHERE email = ?', email)
  }
}