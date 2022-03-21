// package: express
const { Router } = require("express")
// middleware: auth
const { verifyAccess } = require("../middlewares/midware_auth")
// controller: category
const {
  createCategory,
  readAllCategory,
  readCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/controller_category")

// usage: express-router
const router = Router()

router
  .post("/", verifyAccess, createCategory)
  .get("/", verifyAccess, readAllCategory)
  .get("/:id", verifyAccess, readCategoryById)
  .patch("/:id", verifyAccess, updateCategory)
  .delete("/:id", verifyAccess, deleteCategory)
module.exports = router
