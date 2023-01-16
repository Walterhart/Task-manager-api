// Representational State Transfer: REST
// Create Read Update Delete Execute: CRUDE
const express = require("express")
const router = express.Router()
const {getAllTask, getTaskById, addTask ,upadateTask, deleteTask} = require("../controller/task")

// /api/v1/tasks/
// get items
router.route('/').get(getAllTask).post(addTask)
router.route('/:id').get(getTaskById).patch(upadateTask).delete(deleteTask)

module.exports = router