const express = require("express")
const router = express.Router()
const {getAllTask, getTaskById, addTask ,upadateItem, deleteItem} = require("../controller/task")

// /api/v1/tasks/
// get items
router.route('/').get(getAllTask).post(addTask)
router.route('/:id').get(getTaskById).patch(upadateItem).delete(deleteItem)

module.exports = router