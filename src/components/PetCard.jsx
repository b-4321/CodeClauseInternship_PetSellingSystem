import React from 'react'

const PetCard = ({ pet }) => {
  return (
    <div className="glass p-4 rounded-xl shadow-lg hover:shadow-xl transition-all ">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-pink-600">{pet.name}</h3>
      <p className="text-sm text-gray-600">{pet.type}</p>
      <span
  className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white ${
    pet.mood === 'happy'
      ? 'bg-pink-400'
      : pet.mood === 'calm'
      ? 'bg-blue-400'
      : pet.mood === 'energetic'
      ? 'bg-yellow-400 text-black'
      : 'bg-purple-500'
  }`}
>
  {pet.mood}
</span>

    </div>
  )
}
export default PetCard
