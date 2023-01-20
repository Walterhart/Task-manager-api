
const { find, findByIdAndUpdate } = require('../models/task')
const Task = require('../models/task')

const getAllTask = async(req,res) =>{

    try {
        const tasks = await Task.find({})
        res.status(200).send({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

const getTaskById = async(req,res) =>{
    // test  params
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        console.log(task)
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


const addTask = async (req,res) =>{

    
    try {
        // test content added
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        // server error
        res.status(500).json({msg:error})
    }
   
   
    // test  params in postman
    // res.json({id:req.body.params.id})
}


const upadateTask = async(req,res) =>{

   try {
    const {id:taskID}= req.params
    // new: new value, runValidators: run validators
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})
    // test in postman find id and show bod
    //res.status(200).json({id:taskId, data:req.body})
    if(!task){
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
   } catch (error) {
        res.status(500).json({msg:error})
   }
}

const deleteTask =async(req,res) =>{
    try {
        const{id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
            
            
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
   
}

module.exports={
    getAllTask,
    addTask,
    getTaskById,
    upadateTask,
    deleteTask
}