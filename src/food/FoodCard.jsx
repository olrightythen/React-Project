import React from "react";
import toast from "react-hot-toast";

const FoodCard = ({ food }) => {
  const orderFood = async () => {
    try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    if (!response.ok) {
      throw new Error("Failed to add food to cart");
    }
    console.log(response);
    toast.success("Order submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit order");
    }
  };

  return (
    <div className="shadow-lg w-80 border rounded overflow-hidden">
      <img src={food.image} alt={food.name} className="h-60 w-full" />
      <div className="p-4 border-t-4 border-gray">
        <h2 className="font-semibold mb-2">{food.name}</h2>
        <p className="text-gray-700 mb-2">Tags: {food.tags.join(', ')}</p>
        <div className="flex justify-center">
          <button
            onClick={orderFood}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
