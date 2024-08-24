import React, { useState } from "react";
import toast from "react-hot-toast";

const AddFood = () => {
  const [added, setAdded] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add food");
      }
      toast.success("Food added successfully");
      setAdded(true);
    } catch (error) {
      console.error("Error adding food:", error);
      toast.error("Failed to add food");
    }
  };

  return (
    <>
      {added && <Navigate to="/admin/managefoods" />}
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Add Food</h1>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
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
              name="price"
              id="price"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
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
              name="image"
              id="image"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
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
              name="tags"
              id="tags"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Food
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFood;
