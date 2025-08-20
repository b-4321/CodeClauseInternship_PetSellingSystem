import React from 'react'
import { motion } from 'framer-motion'
import PetCard from './PetCard'

const pets = [
  { id: 1, name: 'Luna', type: 'Dog', mood: 'happy', image: '/pets/luna.jpg' },
  { id: 2, name: 'Milo', type: 'Cat', mood: 'calm', image: '/pets/milo.jpg' },
  { id: 3, name: 'Ziggy', type: 'Rabbit', mood: 'energetic', image: '/pets/ziggy.jpg' },
  { id: 4, name: 'Nova', type: 'Dog', mood: 'mysterious', image: '/pets/nova.jpg' },
]

const moodColors = {
  happy: 'shadow-pink-300',
  calm: 'shadow-blue-300',
  energetic: 'shadow-yellow-300',
  mysterious: 'shadow-purple-400',
}

const PetGallery = ({ moodFilter = 'all' }) => {
  const filteredPets =
    moodFilter === 'all' ? pets : pets.filter((pet) => pet.mood === moodFilter)

  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-10 ml-15"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {filteredPets.map((pet) => (
        <motion.div
          key={pet.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${moodColors[pet.mood]}`}
        >
          <PetCard pet={pet} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default PetGallery
