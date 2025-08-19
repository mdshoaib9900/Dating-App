import React from 'react'
import { Router } from 'react-router-dom';


function Header() {
  return (
    <header className="w-full shadow-sm bg-white px-6 py-3 flex items-center justify-between">
    {/* Logo / App Name */}
    <h1 className="text-3xl font-semibold text-pink-600">DateVerse</h1>

    {/* Nav Links */}
    <nav className="hidden md:flex gap-6 text-gray-600  text-sm">
      <a href="#" className="hover:text-pink-600  text-3xl">Discover</a>
      <a href="#" className="hover:text-pink-600 text-3xl">Matches</a>
      <a href="#" className="hover:text-pink-600 text-3xl">Messages</a>
      <a href="#" className="hover:text-pink-600 text-3xl">Profile</a>
    </nav>

    {/* Profile / Login */}
    <button className="bg-pink-600 text-white px-8 font-bold text-2xl p-4 rounded-full text-sm hover:bg-pink-500 cursor-pointer transition">
      Login
    </button>
  </header>
  )
}

export default Header