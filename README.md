## Todo Application 

This project contains a simple TODO application It has the following features -
- Anyone can create a todo 
- Anyone can see their existing todos 
- Anyone can mark a todo as done 

export function CreateTodo() {
    return (
        <div>
            <input type="text" placeholder="title" /><br />
            <input type="text" placeholder="description" /><br />
            <button>Add Todo</button>
        </div>
    )
}