import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full backdrop-blur-md bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <img
        className="h-[60px] w-[90px] border-2 border-pink-300 rounded-full shadow-sm cursor-pointer hover:scale-105 hover:rotate-3 transition-transform duration-300"
        src={logo}
        alt="AsWeMeet Logo"
      />

      {/* Nav Links */}
      <nav className="hidden md:flex gap-10 text-gray-800 text-2xl font-semibold">
        {["Discover", "Matches", "Messages", "Profile"].map((item) => (
          <a
            key={item}
            href="#"
            className="relative group hover:text-pink-600 transition-colors duration-300"
          >
            {item}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Login Button */}
      <button className="relative bg-gradient-to-r from-pink-400 to-purple-400 text-white px-10 py-3 rounded-full font-bold text-xl cursor-pointer shadow-md overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-300">
        <span className="relative z-10 cursor-pointer">Login</span>
        {/* Glow Effect */}
        <span className="absolute inset-0 bg-pink-300 blur-lg opacity-40 animate-pulse"></span>
      </button>
    </header>
  );
}

export default Header;
