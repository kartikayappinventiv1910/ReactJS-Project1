import React, { useState } from "react";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles({
  mainContainer:{
    backgroundColor:"#aae3b3",
    width:"100vw",
    height:"100vh",
  },
  mainHeading:{
    fontSize:"45px",
    marginTop:"100px",
    marginBottom:"50px",
    color:"black"
  },
  addToDo:{
    backgroundColor:"white",
    width:"350px",
    height:"170px",
    marginLeft:"560px",
    padding:"20px 0px",
    display:"flex",
    flexDirection:"column",
    borderRadius:"20px",
    boxShadow:"0 0 5px grey"
  },
  addHeading:{
    fontSize:"30px",
    color:"#055180",
    marginBottom:"20px"
  },
  input:{
    width: "250px",
    border: "none",
    outline: "none",
    borderRadius: "15px",
    padding: "10px 15px",
    fontSize: "20px",
    margin: "20px 30px",
    boxShadow:"0 0 5px grey"
  },
  submitBtn: {
    backgroundColor: "#34eb6b",
    color: "black",
    padding: "10px 15px",
    width:"150px",
    fontSize: "22px",
    fontWeight: "bold",
    borderRadius:"15px",
    border:"none",
    outline:"none",
    letterSpacing: "2px",
    cursor:"pointer",
    marginLeft:"90px",

    "&:hover": {
      backgroundColor: "#3492eb",
    },
  },
  displayConatiner:{
    display:"flex",
    marginLeft:"580px",
    marginTop:"30px"
  },
  todoText:{
    fontSize:"24px",
    color:"black",
    marginRight:"20px",
  },
  complete:{
    backgroundColor:"green",
    marginRight:"20px",
    fontSize:"17px",
  },
  incomplete:{
    backgroundColor:"red",
    marginRight:"20px",
    fontSize:"17px",
  }
})

function Todo({ todo, index, markTodo, removeTodo }) {
  const classes = styles();
  return (
    <div className={classes.displayConatiner}>
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }} className={classes.todoText}>
        {todo.text}
      </span>
      <div>
        <button variant="outline-success" onClick={() => markTodo(index)} className={classes.complete}>
          ✓
        </button>{" "}
        <button variant="outline-danger" onClick={() => removeTodo(index)} className={classes.incomplete}>
          ✕
        </button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const classes = styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.addToDo}>
        <div>
          <b className={classes.addHeading}>Add Todo</b>
        </div>
        <input
          type="text"
          className={classes.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      <button variant="primary mb-3" type="submit" className={classes.submitBtn}>
        Submit
      </button>
      </div>
    </form>
  );
}

function ToDoApp() {
  const classes = styles();
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
    <div className={classes.mainContainer}>
      <div >
        <h1 className={classes.mainHeading}>Todo List</h1>
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
