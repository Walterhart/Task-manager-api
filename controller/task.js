
const Task = require('../models/task')

const getAllTask = (req,res) =>{
    res.send(" All Tasks")
}

const getTaskById = (req,res) =>{
    // test  params
    res.json({id:req.body.params.id})
}


const addTask = async (req,res) =>{

    //test content added
    const task = await Task.create(req.body)
   
    res.status(201).json({task})
    // test  params in postman
    // res.json({id:req.body.params.id})
}


const upadateTask = (req,res) =>{
    res.send(" Task updated")
}

const deleteTask =(req,res) =>{
    res.send("Task deleted")
}

module.exports={
    getAllTask,
    addTask,
    getTaskById,
    upadateTask,
    deleteTask
}