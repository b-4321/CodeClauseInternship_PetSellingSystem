import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass backdrop-blur-md bg-white/30 text-gray-700 py-10 px-6 mt-20 rounded-t-xl shadow-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🐾 Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">PetPal Market</h2>
          <p className="text-sm leading-relaxed">
            Made with 🐾 and ❤️ in India. Adopt, love, and share joy with every tail wag.
          </p>
        </div>

        {/* 🔗 Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/browse" className="hover:text-pink-500 transition">Browse Pets</a></li>
            <li><a href="/sell" className="hover:text-pink-500 transition">Sell a Pet</a></li>
            <li><a href="/orders" className="hover:text-pink-500 transition">My Orders</a></li>
          </ul>
        </div>

        {/* 📱 Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-pink-500">
            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* 🧾 Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} PetPal Market. All rights reserved.
      </div>
    </motion.footer>
  )
}

export default Footer
