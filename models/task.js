
const mongoose = require('mongoose')

// structure for documents
// provie interface for api
const TaskSchema = new mongoose.Schema ({
    name: String,
    completed: Boolean,
})

// need to export to controller
module.exports = mongoose.model('Task', TaskSchema)