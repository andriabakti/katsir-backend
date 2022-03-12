const { response } = require('../helpers/helper_resp')
const {
  insertCategory,
  getAllCategory,
  getCategoryById,
  editCategory,
  removeCategory
} = require('../models/model_category')

module.exports = {
  createCategory: (req, res) => {
    const { name } = req.body
    const payload = {
      name,
      created_at: new Date()
    }
    insertCategory(payload)
      .then((_result) => {
        response(res, [], res.statusCode, `${name} category created successfully`, null, null)
      })
      .catch((error) => {
        response(res, [], error.statusCode, `${name} category failed to create`, null, error)
      })
  },
  readAllCategory: (_req, res) => {
    getAllCategory()
      .then((result) => {
        response(res, result, res.statusCode, "All categories found", null, null)
      })
      .catch((error) => {
        response(res, [], error.statusCode, "Categories not found", null, error)
      })
  },
  readCategoryById: (req, res) => {
    const { id } = req.params
    getCategoryById(id)
      .then((result) => {
        response(res, result, res.statusCode, "Category found", null, null)
      })
      .catch((error) => {
        response(res, [], error.statusCode, "Category not found", null, error)
      })
  },
  updateCategory: (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const payload = {
      name,
      updated_at: new Date()
    }
    editCategory(payload, id)
      .then((_result) => {
        response(res, [], res.statusCode, "Category updated successfully", null, null)
      })
      .catch((error) => {
        response(res, [], error.statusCode, "Category failed to update", null, error)
      })
  },
  deleteCategory: (req, res) => {
    const { id } = req.params
    removeCategory(id)
      .then((_result) => {
        response(res, [], res.statusCode, "Category deleted successfully", null, null)
      })
      .catch((error) => {
        response(res, [], error.statusCode, "Category failed to delete", null, error)
      })
  }
}