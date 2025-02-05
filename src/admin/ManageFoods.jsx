import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const response = await fetch("http://localhost:3000/foods");
      const data = await response.json();
      setFoods(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setLoading(false);
    }
  };

  const deleteFood = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/foods/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete food");
      }
      setFoods(foods.filter((food) => food.id !== id));
      toast.success("Food deleted successfully");
    } catch (error) {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food");
    }
  };

  const handleDelete = (id) => {
    confirm("Are you sure you want to delete this food?") && deleteFood(id);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Manage Foods</h1>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/admin/addfood">Add Food</Link>
        </button>
      </div>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tags
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {foods.map((food) => (
              <tr key={food.id}>
                <td className="px-6 py-4 whitespace-nowrap">{food.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{food.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {food.tags.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline">
                    <Link to={`/admin/editfood/${food.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageFoods;
