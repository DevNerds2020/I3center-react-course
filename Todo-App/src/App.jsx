/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useState } from "react";
function App() {
  const defaultFoodsData = [
    { name: "chicken stake", category: "chicken" },
    { name: "soda", category: "drink" },
  ];
  const [foods, setFoods] = useState(defaultFoodsData);
  const [categories, setCategories] = useState(["chicken", "all"]);
  const handleSetCategory = (event) => {
    if (event.target.id === "all") {
      setFoods(defaultFoodsData);
    } else {
      const newFoods = defaultFoodsData.filter(
        (food) => food.category == event.target.id,
      );
      setFoods(newFoods);
    }
  };
  console.log(foods);
  return (
    <>
      {categories.map((category) => {
        return (
          <button id={category} onClick={handleSetCategory}>
            {category}
          </button>
        );
      })}

      {foods.map((food) => {
        return <div>{food.name}</div>;
      })}
    </>
  );
}

export default App;
