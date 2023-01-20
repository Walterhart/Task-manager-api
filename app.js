
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const error404 = require("./middleware/error-404")

// acess .env file
// need dotenv package
require('dotenv').config()

// port
const port = 3000

// db connection
const connectDB = require('./db/connect')

// middleware
// parse json data
app.use(express.json())
// use public files
app.use(express.static("./public"))

// routes
// url will use tasks reference for api
app.use('/api/v1/tasks', tasks)

// display error for page that does not exist
// placement matter
// similar to a default 
app.use(error404)
// if connected start up server
const start = async() => {
    try {
        // pass .env MONGO_URI to connectDB function
        await connectDB(process.env.MONGO_URI)
        app.listen(port,  console.log(`Server is listening to port ${port}...`))
        
    } catch (error) {
        
        console.log(error)
    }
}

start()