import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // TODO: Add login logic
    console.log('Logging in:', { email, password })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto mt-25 p-8 glass rounded-xl shadow-xl gap-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-pink-600 mt-14">Welcome Back 🐾</h2>
      <form onSubmit={handleLogin} className="space-y-4 mt-10">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Log In
        </button>
      </form>
    </motion.div>
  )
}

export default Login
