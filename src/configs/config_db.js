// package: mysql2
const { Pool } = require("pg")
// package: fs
const fs = require("fs")

const pool = new Pool({
  // host: process.env.PG_HOST,
  // user: process.env.PG_USER,
  // password: process.env.PG_PASSWORD,
  // database: process.env.PG_DATABASE,
  // port: process.env.PG_PORT,
  connectionString: `${process.env.DATABASE_URL}?sslmode=require`,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync("/path/to/server-certificates/root.crt").toString()
  }
})
module.exports = pool
