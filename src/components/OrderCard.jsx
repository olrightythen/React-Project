import React from 'react'
import toast from 'react-hot-toast'

const OrderCard = ({food, fetchOrder}) => {
  const cancelOrder = async () => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${food.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete the order')
      }
      const data = await response.json()
      console.log(data)
      if (data) {
        fetchOrder()
      }
      toast.success('Order has been cancelled')
    } catch (error) {
      toast.error('Failed to cancel the order')
    }
  }

  return (
    <div className="shadow-lg w-80 border rounded overflow-hidden">
      <img src={food.image} alt={food.name} className="h-60 w-full" />
      <div className="p-4 border-t-4 border-gray">
        <h2 className="font-semibold mb-2">{food.name}</h2>
        <p className="text-gray-700 mb-2">Tags: {food.tags.join(', ')}</p>
        <div className="flex justify-center">
          <button
            onClick={cancelOrder}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard