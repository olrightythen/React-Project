import React from "react";
import FoodItem from "./food/FodItem";

function App() {
  return (
    <>
      <h1 className="text-5xl text-amber-400 text-center font-bold py-10">
        Our Top selling Food Items
      </h1>
      <FoodItem />
    </>
  );
}

export default App;
