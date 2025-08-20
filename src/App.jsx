import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BrowsePets from './components/BrowsePets'
import SellPet from './components/SellPet'
import MyOrders from './components/MyOrders'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  return (
    <Router>

      
        <Navbar />

        {/* 📦 Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowsePets />} />
          <Route path="/sell" element={<SellPet />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </Router>
  )
}

export default App
