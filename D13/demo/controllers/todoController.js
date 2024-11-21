const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const {title , description} = req.body;
        const todo = new Todo({
            title, 
            description
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        console.error('Error creating todo:', err);
    }
};