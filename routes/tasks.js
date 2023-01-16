const express = require("express")
const router = express.Router()
const {getAllTask, getTaskById, addTask ,upadateItem, deleteItem} = require("../controller/task")

// /api/v1/tasks/
// get items
router.route('/').get(getAllTask)
router.route('/:id').get(getTaskById)
router.route('/').post(addTask)
router.route('/:id').get(upadateItem)
router.route('/:id').get(deleteItem)




module.exports = router