// components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md fixed w-full z-50 rounded-lg py-2 mt-2 mr-15 border-b border-gray-200 transition-all hover:shadow-lg hover:bg-white/50 backdrop-filter backdrop-blur-lg text-gray-800 font-quicksand
    ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-pink-600">
          <FaPaw className="text-2xl" />
          PetPal Market
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse Pets</Link>
          <Link to="/sell">Sell a Pet</Link>
          <Link to="/orders">My Orders</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-sm px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition">
            Login
          </Link>
          <Link to="/register" className="text-sm px-4 py-2 rounded border border-pink-500 text-pink-500 hover:bg-pink-50 transition">
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-pink-600">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md px-4 py-3 space-y-3 text-gray-700"
        >
          <Link to="/">Home</Link>
          <Link to="/browse">Browse Pets</Link>
          <Link to="/sell">Sell a Pet</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </motion.div>
      )}
    </nav>
  );
}
