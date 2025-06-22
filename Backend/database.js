const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://sumit2003gupta:jon-don321@cluster0.pgtov.mongodb.net/todo-app?retryWrites=true&w=majority");
// ./database.js

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo: Todo };
 