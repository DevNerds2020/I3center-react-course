import { useState } from "react";
import TodoItem from "./TodoItem";

/* eslint-disable react/jsx-key */
const TodoForm = () => {
  const [todo, setTodo] = useState([
    { id: 1, name: "task 1", priority: "1", isComplete: false },
    { id: 2, name: "task 2", priority: "2", isComplete: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (todoId) => {
    console.log("%c Line:12 🍌 todoId", "color:#2eafb0", todoId);
    const newValue = todo.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          isComplete: !item.isComplete,
        };
      } else {
        return item;
      }
    });

    setTodo(newValue);
  };

  const handleDelete = (todoId) => {
    const newValue = todo.filter((item) => item.id !== todoId);
    console.log(todo);
    console.log("%c Line:29 🥟 newValue", "color:#2eafb0", newValue);
    setTodo(newValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        border: "1px solid black",
        flexDirection: "column",
      }}
    >
      <input onChange={handleChange}></input>
      <h5>{inputValue}</h5>
      <h3>My Todo App</h3>
      {todo.map((element, index) => (
        <TodoItem
          handleClick={handleClick}
          todoId={element.id}
          name={element.name}
          key={index}
          isComplete={element.isComplete}
          handleDelete={handleDelete}
        />
      ))}

      {/* input component */}
      {/* todo's component */}
    </div>
  );
};

export default TodoForm;
