// config: database
const conn = require("../configs/config_db")

module.exports = {
  queryAction: (...args) => {
    return new Promise((resolve, reject) => {
      conn.query(...args, (err, res) => {
        if (!err) {
          resolve(res)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
