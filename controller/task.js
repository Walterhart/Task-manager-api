
const getAllTask = ((req,res) =>{
    res.send(" All Tasks")
})


const addTask = ((req,res) =>{
    res.send("New task added")
})


const getTaskById = ((req,res) =>{
    res.send(" Task")
})


const upadateTask = ((req,res) =>{
    res.send(" Task updated")
})

const deleteTask =((req,res) =>{
    res.send("Task deleted")
})

module.exports={
    getAllTask,
    addTask,
    getTaskById,
    upadateTask,
    deleteTask
}