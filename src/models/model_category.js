// helper: query
const {
  queryAction
} = require("../helpers/helper_query")

module.exports = {
  insertCategory: (payload) => {
    return queryAction("INSERT INTO category SET ?", payload)
  },
  getAllCategory: () => {
    return queryAction("SELECT * FROM category")
  },
  getCategoryById: (id) => {
    return queryAction("SELECT * FROM category WHERE id = ?", id)
  },
  editCategory: (payload, id) => {
    return queryAction("UPDATE category SET ? WHERE id = ?", [payload, id])
  },
  removeCategory: (id) => {
    return queryAction("DELETE FROM category WHERE id = ?", id)
  }
}
