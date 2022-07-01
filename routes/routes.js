const express = require('express')
const { newTask, updateTask, deleteTask, getTasks } = require('../controllers/controller')
const router = express.Router()

router.post('/tasks/new', newTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks', getTasks)

module.exports = router