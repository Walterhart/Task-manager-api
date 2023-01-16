

const getAllTask = ((req,res) =>{
    res.send(" All Tasks")
})

const getTaskById = ((req,res) =>{
    // test  params
    res.json({id:req.body.params.id})
})


const addTask = ((req,res) =>{

    //test content added
    res.json(req.body)
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