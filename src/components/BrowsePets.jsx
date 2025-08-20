import React, { useState } from 'react'
import Hero from '../components/Hero'
import PetGallery from '../components/PetGallery'

const BrowsePets = () => {
  const [selectedMood, setSelectedMood] = useState('all')

  return (
    <main className="font-quicksand bg-gradient-to-br from-pink-100 to-white min-h-screen text-gray-800">
      {/* 🐶 Hero Section with Mood Accent */}
      <Hero mood={selectedMood === 'all' ? 'happy' : selectedMood} />

      {/* 🎯 Mood Filter */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">
          Browse Pets by Mood
        </h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {['all', 'happy', 'calm', 'energetic', 'mysterious'].map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedMood === mood
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
              }`}
            >
              {mood.charAt(0).toUpperCase() + mood.slice(1)}
            </button>
          ))}
        </div>

        {/* 🐾 Pet Gallery */}
        <PetGallery moodFilter={selectedMood} />
      </section>
    </main>
  )
}

export default BrowsePets
