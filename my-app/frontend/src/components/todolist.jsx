import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuid } from "uuid";
import Grid from "@mui/material/Grid";

function TodoList() {
  const id = uuid();
  const [todos, setTodos] = useState([
    { id, task: "Eleftheria", completed: false },
    { id, task: "Gennadios", completed: false },
    { id, task: "Lysimachos", completed: false },
  ]);

  const create = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updtedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todosList = todos.map((todo) => (
    <Todo
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo}
    />
  ));

  return (
    <Grid container spacing={3}>
      <div className="TodoList">
        <ul>{todosList}</ul>
        <NewTodoForm
          style={{ columnCount: 3 }}
          createTodo={create} // <--- This is the prop that is passed to NewTodoForm
        />
      </div>
    </Grid>
  );
}

export default TodoList;
