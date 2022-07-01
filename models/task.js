const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    timeStamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('task', taskSchema)