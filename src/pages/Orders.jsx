import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders");
      if (!response.ok) {
        toast.error("Failed to fetch data from the server");
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      {!loading && !error && (
        <>
          <h1 className="text-4xl text-amber-400 text-center font-bold py-5">
            Your Orders
          </h1>
          <div className="flex gap-3 flex-wrap px-24 py-6 scroll-smooth justify-center">
            {orders.length === 0 ? (
              <h1 className="text-3xl text-center font-bold text-gray-300">
                No orders found
              </h1>
            ) : (
              orders.map((food) => (
                <OrderCard key={food.id} fetchOrder={fetchOrders} food={food} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
