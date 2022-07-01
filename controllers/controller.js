const Task = require('../models/task')


exports.newTask = async (req, res) => {
    const task = await new Task(req.body)
    await task.save()
    res.status(200).json({message: "New task created successfully", task})
}

exports.updateTask = (req, res) => {
    const {title, description} = req.body
    Task.findByIdAndUpdate(req.params.id, {title, description}, {new: true}, (err, task) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json({message: "Update successful", task})
    })
}

exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, task) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json({message: "This task has been deleted successfully", task})
    })
}

exports.getTasks = (req, res) => {
    Task.find((err, tasks) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json(tasks)
    })
}