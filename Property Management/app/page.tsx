'use client'

import { useState, useEffect } from 'react'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setIsLoggedIn(!!token)
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-md relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">🌸</span>
        <h1 className="text-3xl font-bold text-center mb-8 relative z-10">Property Management System</h1>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <div className="max-w-md mx-auto relative z-10">
            <Login onLoginSuccess={() => setIsLoggedIn(true)} />
          </div>
        )}
      </div>
    </main>
  )
}

