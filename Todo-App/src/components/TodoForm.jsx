import TodoItem from "./TodoItem";

/* eslint-disable react/jsx-key */
const TodoForm = () => {
  const todo = [
    { name: "task 1", priority: "1" },
    { name: "task 2", priority: "2" },
  ];

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
      <h3>My Todo App</h3>
      {todo.map((element, index) => (
        <TodoItem name={element.name} key={index} />
      ))}

      {/* input component */}
      {/* todo's component */}
    </div>
  );
};

export default TodoForm;
