import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ mood = 'happy' }) => {
  const moodGradients = {
    happy: 'from-pink-200 to-pink-100',
    calm: 'from-blue-200 to-blue-100',
    energetic: 'from-yellow-200 to-orange-100',
    mysterious: 'from-purple-300 to-indigo-200',
  }

  return (
    <section
      className={`relative h-[80vh] flex items-center justify-center bg-gradient-to-br ${moodGradients[mood]} transition-all duration-500 overflow-hidden py-10`}
    >
      {/* 🌸 Decorative Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none" aria-hidden="true" />

      {/* 🌟 Glass Container */}
      <motion.div
        className="glass text-center px-6 py-10 max-w-2xl mx-4 mt-10 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Find Your Furry Friend 🐾
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Discover adorable pets waiting for a loving home. Filter by mood, breed, or color—your perfect companion is just a click away.
        </motion.p>

        <motion.button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Pets
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
