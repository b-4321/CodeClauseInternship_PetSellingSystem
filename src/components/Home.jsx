import React from 'react'
import Hero from '../components/Hero'
import PetGallery from '../components/PetGallery'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <main className="font-quicksand bg-gradient-to-br from-pink-100 to-white min-h-screen text-gray-800">
        

      {/* 🐾 Hero Section */}
      <Hero />

      {/* 🐶 Featured Pets */}
      <section className=" py-20 w-full">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-500 ml-15">
          Meet Your New Best Friend
        </h2>
        <PetGallery />
      </section>
        {/* 🐾 Footer */}
        <Footer />
      
    </main>
  )
}

export default Home
