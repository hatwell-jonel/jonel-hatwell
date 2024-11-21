const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // status: {
    //     type: String,
    //     required: true,
    //     enum: ['pending', 'in-progress', 'completed'],
    // },
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;