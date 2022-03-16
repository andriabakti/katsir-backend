// package: mysql2
const { Pool } = require("pg")
// env: database
const {
  PG_HOST,
  PG_USER,
  PG_PASSWORD,
  PG_DATABASE,
  PG_PORT
} = process.env

const pool = new Pool({
  host: PG_HOST,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT,
  ssl: PG_SSL
})
module.exports = pool
