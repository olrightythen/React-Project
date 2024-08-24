import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditFood = () => {
  const { id } = useParams();
  const [edited, setEdited] = useState(false);
  const [food, setFood] = useState({
    name: "",
    price: "",
    image: "",
    tags: "",
  });

  const fetchFood = async () => {
    try {
      const response = await fetch(`http://localhost:3000/foods/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch food");
      }
      const data = await response.json();
      setFood(data);
    } catch (error) {
      console.error("Error fetching food:", error);
      toast.error("Failed to fetch food");
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const editFood = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/foods/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });
      if (!response.ok) {
        throw new Error("Failed to edit food");
      }
      toast.success("Food edited successfully");
      setEdited(true);
    } catch (error) {
      console.error("Error edited food:", error);
      toast.error("Failed to edit food");
    }
  };

  return (
    <>
      {edited && <Navigate to="/admin/foods" />}
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Edit Food</h1>
        <form onSubmit={editFood} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={food.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={food.price}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={food.image}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={food.tags}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit Food
          </button>
        </form>
      </div>
    </>
  );
};

export default EditFood;
