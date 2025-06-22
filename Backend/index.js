const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const cors = require("cors");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3000; // Render provides PORT via env

app.use(cors());
app.use(express.json());

// Create a new todo
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs!!" });
  }

  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({ msg: "todo created !!" });
});

// Get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({ todos });
});

// Mark todo as completed
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(411).json({ msg: "invalid input!!" });
  }

  await Todo.updateOne({ _id: req.body.id }, { completed: true });

  res.json({ msg: "The Todo is marked as completed" });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
