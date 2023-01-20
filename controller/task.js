
const { find, findByIdAndUpdate } = require('../models/task')
const Task = require('../models/task')
const asyncWrapper= require("../middleware/async")

const getAllTask = asyncWrapper (async(req,res) =>{
   
        const tasks = await Task.find({})
        res.status(200).send({tasks})
        // amount of task
        // res.status(200).send({tasks, amount: tasks.length})
        // note: data is already a property for front end axois
        // res.status(200).send(sucess:true, data:{tasks,nbHits:tasks.length)
})

const getTaskById = asyncWrapper (async(req,res) =>{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        console.log(task)
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
})


const addTask = asyncWrapper( async (req,res) =>{

        const task = await Task.create(req.body)
        res.status(201).json({task})

   
    // test  params in postman
    // res.json({id:req.body.params.id})
}
)

const upadateTask = asyncWrapper( async(req,res, next) =>{
    const {id:taskID}= req.params
    // new: new value, runValidators: run validators
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true,})
    // test in postman find id and show bod
    //res.status(200).json({id:taskId, data:req.body})
    if(!task){
        const error = new Error('Not Found')
        error.status = 404
        return next(error)
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})
   
}
)
const deleteTask = asyncWrapper(async(req,res) =>{
   
        const{id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    
})

module.exports={
    getAllTask,
    addTask,
    getTaskById,
    upadateTask,
    deleteTask
}