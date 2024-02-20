/* eslint-disable react/prop-types */

import Button from "./Button";

const TodoItem = (props) => {
  const { name } = props;

  const handleDelete = () => {
    alert(`${name} task completed`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: 150,
          height: "100%",
          background: "gray",
        }}
      >
        <Button handleClick={handleDelete} buttonLabel="delete" />
        <button>done</button>
        <h6>{name}</h6>
      </div>
    </>
  );
};

export default TodoItem;
