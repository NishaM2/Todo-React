const express = require("express");
const { createTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "you sent wrong inputs",
        })
        return;
    }
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    
})