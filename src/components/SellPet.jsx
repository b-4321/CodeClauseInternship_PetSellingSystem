import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SellPet = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    mood: '',
    image: null,
    location: '',
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Pet submitted:', formData)
    // You can add API call or local storage logic here
  }

  return (
    <main className="font-quicksand bg-gradient-to-br from-pink-100 to-white min-h-screen py-12 px-4">
      <motion.div
        className="glass max-w-xl mx-auto p-8 rounded-xl shadow-lg mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Sell a Pet 🐾
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Bird">Bird</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mood</label>
            <select
              name="mood"
              value={formData.mood}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Mood</option>
              <option value="happy">Happy</option>
              <option value="calm">Calm</option>
              <option value="energetic">Energetic</option>
              <option value="mysterious">Mysterious</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location (optional)</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-pink-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all"
          >
            Submit Pet
          </motion.button>
        </form>
      </motion.div>
    </main>
  )
}

export default SellPet
