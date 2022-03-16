// model: category
const {
  insertCategory,
  getAllCategory,
  getCategoryById,
  editCategory,
  removeCategory
} = require("../models/model_category")
// helper: response
const { response } = require("../helpers/helper_resp")

module.exports = {
  createCategory: (req, res, next) => {
    const { name } = req.body
    const payload = {
      name,
      created_at: new Date()
    }
    insertCategory(payload)
      .then((_result) => {
        // console.log(result)
        response(res, [], res.statusCode, `${name} category created successfully`, null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: `Failed to create ${name} category`
        })
      })
  },
  readAllCategory: (_req, res, next) => {
    getAllCategory()
      .then((result) => {
        // console.log(result)
        response(res, result.rows, res.statusCode, "All categories found", null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: "Categories not found"
        })
      })
  },
  readCategoryById: (req, res, next) => {
    const { id } = req.params
    getCategoryById(id)
      .then((result) => {
        // console.log(result)
        response(res, result.rows, res.statusCode, "Category found", null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: "Category not found"
        })
      })
  },
  updateCategory: (req, res, next) => {
    const { id } = req.params
    const { name } = req.body
    const payload = {
      name,
      updated_at: new Date()
    }
    editCategory(payload, id)
      .then((_result) => {
        // console.log(result)
        response(res, [], res.statusCode, "Category updated successfully", null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: "Failed to update this category"
        })
      })
  },
  deleteCategory: (req, res, next) => {
    const { id } = req.params
    removeCategory(id)
      .then((_result) => {
        // console.log(result)
        response(res, [], res.statusCode, "Category deleted successfully", null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: "Failed to delete this category"
        })
      })
  }
}
