import { useState } from "react";
import { Button, TextField, Dialog } from "@mui/material";

const MaterialTodoApp = () => {
  const [person, setPerson] = useState({ name: "", age: "" });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleNameChange = (event) => {
    setPerson({ ...person, name: event.target.value });
  };
  const handleAgeChange = (event) => {
    setPerson({ ...person, age: event.target.value });
  };

  return (
    <>
      <div>
        <TextField
          onChange={handleNameChange}
          label="person name"
          variant="filled"
        />
        <TextField onChange={handleAgeChange} type="number" label="age" />
        <Button onClick={handleClick}>submit</Button>
      </div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        thank you {person.name} we will contact you
      </Dialog>
    </>
  );
};

export default MaterialTodoApp;
