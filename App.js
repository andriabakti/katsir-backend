// package: dotenv
require("dotenv").config()
// package: express
const express = require("express")
const { urlencoded, json, static } = require("express")
// package: morgan
const logger = require("morgan")
// package: cors
const cors = require("cors")

// router: base
const routes = require("./src/routers/")
// helper: response
const { response } = require("./src/helpers/helper_resp")
// env: port
const port = process.env.PORT || 3939
const app = express()

app.use(
  urlencoded({
    extended: false
  }),
  json()
)
app.use(cors())
app.use(logger("dev"))
app.use("/api/v1", routes)
app.use("/uploads", static("./uploads"))
app.use((err, _req, res, _next) => {
  const statusCode = err.status || 500
  const message = err.message || "Internal Server Error"
  response(res, [], statusCode, message, null, err)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
