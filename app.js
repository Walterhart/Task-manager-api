console.log("test")
const express = require("express")
const app = express()
// port
const port = 3000

app.use(express.static("./public"))
// routes
app.get('/hello', (req,res) =>{
    res.send("Made it")
})
app.listen(port, () =>{
    console.log(`Server is listening to port ${port}`)
})