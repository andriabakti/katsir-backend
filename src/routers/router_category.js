// package: express
const express = require('express')
const router = express.Router()
// middleware: auth
const {
  verifyAccess
} = require('../middlewares/midware_auth')
// controller: category
const {
  createCategory,
  readAllCategory,
  readCategoryById,
  updateCategory,
  deleteCategory
} = require('../controllers/controller_category')

router
  .post('/', verifyAccess, createCategory)
  .get('/', verifyAccess, readAllCategory)
  .get('/:id', verifyAccess, readCategoryById)
  .patch('/:id', verifyAccess, updateCategory)
  .delete('/:id', verifyAccess, deleteCategory)
module.exports = router