// package: mysql2
const { createConnection } = require("mysql2")
// env: database
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const connection = createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
})
module.exports = connection
