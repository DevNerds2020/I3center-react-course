/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <button onClick={() => setOpen(!open)}>change open</button>
    </>
  );
}

export default App;
