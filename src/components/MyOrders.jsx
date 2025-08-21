import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const orders = [
  {
    id: 'ORD001',
    petName: 'Luna',
    type: 'Dog',
    status: 'Adopted',
    date: '2025-08-01',
    image: '/pets/dog1.jpg',
  },
  {
    id: 'ORD002',
    petName: 'Milo',
    type: 'Cat',
    status: 'Pending',
    date: '2025-08-03',
    image: '/pets/cat1.jpg',
  },
  {
    id: 'ORD003',
    petName: 'Ziggy',
    type: 'Rabbit',
    status: 'Cancelled',
    date: '2025-08-04',
    image: '/pets/rabbit1.jpg',
  },
]

const statusColors = {
  Adopted: 'bg-green-100 text-green-600',
  Pending: 'bg-yellow-100 text-yellow-600',
  Cancelled: 'bg-red-100 text-red-600',
}

const MyOrders = () => {
  const [filter, setFilter] = useState('All')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const filteredOrders =
    filter === 'All' ? orders : orders.filter((o) => o.status === filter)

  return (
    <main className="font-quicksand bg-gradient-to-br from-pink-100 to-white min-h-screen py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          My Orders 🧾
        </h2>

        {/* 🎯 Status Filter Chips */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {['All', 'Adopted', 'Pending', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === status
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* 📦 Order Cards */}
        <div className="grid gap-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="glass flex items-center gap-6 p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={order.image}
                alt={order.petName}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-pink-600">{order.petName}</h3>
                <p className="text-sm text-gray-600">{order.type}</p>
                <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-semibold ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="text-xs text-pink-500 hover:underline"
                >
                  View Details
                </button>
                {order.status === 'Pending' && (
                  <div className="flex gap-2">
                    <button className="text-xs text-yellow-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-xs text-red-500 hover:underline">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 🎬 Modal for Order Details */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedOrder(null)}
          >
            <motion.div
              className="glass p-6 rounded-xl max-w-md w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-pink-600 mb-4">
                Order Details
              </h3>
              <img
                src={selectedOrder.image}
                alt={selectedOrder.petName}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p><strong>Pet:</strong> {selectedOrder.petName}</p>
              <p><strong>Type:</strong> {selectedOrder.type}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <button
                onClick={() => setSelectedOrder(null)}
                className="mt-6 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default MyOrders
