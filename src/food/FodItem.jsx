import React, { useEffect } from "react";
import toast from "react-hot-toast";
import FoodCard from "./FoodCard";

const FoodItem = () => {
  const [foods, setFoods] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:3000/foods");
      if (!response.ok) {
        toast.error("Failed to fetch data from the server");
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setFoods(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  return (
    <div>
      {loading && <h1 className="text-3xl text-center font-bold">Loading...</h1>}
      {error && <h1 className="text-3xl text-center font-bold">Error: {error}</h1>}
      {!loading &&
        !error &&
        (foods.length === 0 ? (
          <h1 className="text-3xl text-center font-bold">
            No food items available
          </h1>
        ) : (
          <div className="flex gap-3 flex-wrap px-24 py-12 justify-center">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default FoodItem;
