import React from 'react'
import { Router } from 'react-router-dom';
function Footer() {
  return (
    <footer className="w-full  bg-gray-100 text-gray-500 text-sm py-4 px-6 flex flex-col md:flex-row items-center justify-between">
    <p>© {new Date().getFullYear()} DateVerse. All rights reserved.</p>

    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#" className="hover:text-pink-600">Privacy</a>
      <a href="#" className="hover:text-pink-600">Terms</a>
      <a href="#" className="hover:text-pink-600">Contact</a>
    </div>
  </footer>
);

}

export default Footer