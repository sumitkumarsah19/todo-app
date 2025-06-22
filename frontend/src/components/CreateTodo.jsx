import React, { useState } from "react";
import '../App.css'; 

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        className="todo-form"
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        className="todo-form"
        id="description"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <div>

      <button
        className="add-btn"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async function (res) {
              const json = await res.json();
              alert("Todo added");
            })
            .catch((err) => {
              console.error("Error:", err);
              alert("Failed to add todo");
            });
        }}
      >
        Add Todo
      </button>
      </div>
    </div>
  );
}





















// import React, { useState } from "react";

// export function CreateTodo() {
//   const [id, setId] = useState("");
//     return <div>
//         {todos.map(function (todo){
//             return<div>
//                 <h1 style={{padding: 10, margin :10}}>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button onClick={() => {
//           fetch("http://localhost:3000/completed", {
//             method: "put",
//             body: JSON.stringify({
//              id : id
//             }),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           })}} > {todo.completed == true ? "completed" : "mark as completed"}  </button></div>  
//         })}
//     </div>
// }