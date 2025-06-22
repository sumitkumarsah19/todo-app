import React, { useState, useEffect } from "react";

export function Todos() {
  const [todos, setTodos] = useState([]);

  // Fetch todos from server

  useEffect(() => {
       fetch("http://localhost:3000/todos")
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched data:", data); // Inspect this in browser
            setTodos(data.todos || data); // ✅ handles both response formats
        });
    },[]);


  const markAsCompleted = (_id) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: _id }),
    })
      .then((res) => res.json())
      .then(() => {
        setTodos((prev) =>
          prev.map((todo) =>
            todo._id === _id ? { ...todo, completed: true } : todo
          )
        );
      })
      .catch((err) => console.error("Error updating todo:", err));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1 style={{ padding: 10, margin: 10 }}>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button 
             className="complete-btn"
             onClick={() => markAsCompleted(todo._id)}>

               {todo.completed ? "Completed" : "Mark as Completed"}

          </button>
        </div>
      ))}
    </div>
  );
}
