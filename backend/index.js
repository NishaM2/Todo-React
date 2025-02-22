const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    }) 

    res.json({
        msg: "todo created successfully",
    })
})


app.get("/todos", async (req, res) => {
    const todo = await todo.find({});

    res.json({
        todos: todo
    })
})

app.put("/completed", async (req, res) => {
    const updateTodo = req.body;
    const parsedPayload = updateTodo.safeParse(updateTodo);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed",
    })
})