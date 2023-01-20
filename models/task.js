
const mongoose = require('mongoose')

// structure for documents
// provide interface for api
// database collection format for insert document
// only property in schema will be past to database!
// any extra variable will be ignored
const TaskSchema = new mongoose.Schema ({
   
    name: {

        // validation
        type: String,
        // do not accept empty string and display custom message when empty
        required: [true, 'Must provide a value'],

        // trim extra white space
        trim:true,

        // max length
        maxlength:[20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        // default value
        default: false,
    }
})



// need to export to controller
module.exports = mongoose.model('Task', TaskSchema)