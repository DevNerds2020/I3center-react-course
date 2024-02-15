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
        width: "80%",
        height: "80%",
        border: "1px solid black",
        minHeight: 300,
      }}
    >
      <h3>My Todo App</h3>
      {todo.map((element, index) => (
        <div key={index}>
          {element.name} {element.priority}
        </div>
      ))}

      {/* input component */}
      {/* todo's component */}
    </div>
  );
};

export default TodoForm;
