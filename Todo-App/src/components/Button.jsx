/* eslint-disable react/prop-types */
const Button = ({ handleClick, buttonLabel }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: "red" }}>
      {buttonLabel}
    </button>
  );
};

export default Button;
