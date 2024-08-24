import React from "react";
import toast from "react-hot-toast";

const FoodCard = ({ food: { image, name, tags, price } }) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, tags, price, image }),
  };

  const orderFood = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/orders",
        fetchOptions
      );
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      toast.success("Order submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error(`Failed to submit order: ${error.message}`);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-800 text-white rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-60 md:h-72 lg:h-80 object-cover transition duration-300 filter hover:blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-between items-center p-4 transition duration-500 backdrop-blur-sm opacity-0 hover:opacity-100">
        <div className="flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">{name}</h2>
          <p className="text-sm md:text-base text-gray-200 mb-1">
            Tags: {tags.join(", ")}
          </p>
          <p className="text-base md:text-lg text-neutral-200 font-bold">
            ${price}
          </p>
        </div>
        <button
          onClick={orderFood}
          className="px-3 py-1.5 md:px-4 md:py-2 bg-red-600 text-sm md:text-base rounded hover:bg-red-700 focus:outline-none transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
