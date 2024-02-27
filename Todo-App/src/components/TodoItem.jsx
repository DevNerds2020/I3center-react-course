/* eslint-disable react/prop-types */

import Button from "./Button";

const TodoItem = (props) => {
  const { name, handleClick, todoId, isComplete, handleDelete } = props;

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
        id={todoId}
      >
        {isComplete ? <>done</> : <>not done</>}
        <Button
          handleClick={() => {
            handleDelete(todoId);
          }}
          buttonLabel="delete"
        />
        <button
          onClick={() => {
            handleClick(todoId);
          }}
        >
          done
        </button>
        <h6>{name}</h6>
      </div>
    </>
  );
};

export default TodoItem;
