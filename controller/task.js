
const getAllTask = ((req,res) =>{
    res.send(" All items")
})


const addTask = ((req,res) =>{
    res.send("New task added")
})


const getTaskById = ((req,res) =>{
    res.send(" item")
})


const upadateItem = ((req,res) =>{
    res.send(" item updated")
})

const deleteItem =((req,res) =>{
    res.send("Item deleted")
})

module.exports={
    getAllTask,
    addTask,
    getTaskById,
    upadateItem,
    deleteItem
}