import React, { useState } from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </button>{" "}
        <button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <b>Add Todo</b>
        </div>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </div>
      <button variant="primary mb-3" type="submit">
        Submit
      </button>
    </form>
  );
}

function ToDoApp() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="container">
        <h1>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div>
              <div>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
