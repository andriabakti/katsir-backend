const express = require('express')
const router = express.Router()
const {
  createCategory,
  readAllCategory,
  readCategoryById,
  updateCategory,
  deleteCategory
} = require('../controllers/controller_category')
const {
  verifyAccess
} = require('../middlewares/midware_auth')

router
  .post('/', verifyAccess, createCategory)
  .get('/', verifyAccess, readAllCategory)
  .get('/:id', verifyAccess, readCategoryById)
  .patch('/:id', verifyAccess, updateCategory)
  .delete('/:id', verifyAccess, deleteCategory)
module.exports = router