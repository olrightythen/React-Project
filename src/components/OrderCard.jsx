import React from "react";
import toast from "react-hot-toast";

const OrderCard = ({ food, fetchOrder }) => {
  const cancelOrder = async () => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${food.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the order");
      }
      const data = await response.json();
      console.log(data);
      if (data) {
        fetchOrder();
      }
      toast.success("Order has been cancelled");
    } catch (error) {
      toast.error("Failed to cancel the order");
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-800 text-white rounded-lg shadow-lg">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-60 object-cover transition duration-300 filter hover:blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-between items-center p-4 transition duration-500 backdrop-blur-sm opacity-0 hover:opacity-100">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
          <p className="text-gray-200 mb-1">Tags: {food.tags.join(", ")}</p>
          <p className=" text-neutral-200 font-bold text-lg">${food.price}</p>
        </div>
        <button
          onClick={cancelOrder}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none transition duration-300"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
