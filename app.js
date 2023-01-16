console.log("test")
const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
// port
const port = 3000

// middleware
// parse json data
app.use(express.json())

app.use(express.static("./public"))

// routes
app.get('/hello', (req,res) =>{
    res.send("Made it")
})

// url will use tasks reference for api
app.use('/api/v1/tasks', tasks)


app.listen(port, () =>{
    console.log(`Server is listening to port ${port}`)
})