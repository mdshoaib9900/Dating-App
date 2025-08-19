import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copy */}
        <p className="text-base md:text-lg font-medium  md:text-left">
          © {new Date().getFullYear()} <span className="font-bold text-white">AsWeMeet</span>.  
          Built for Engineers 
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm md:text-base font-medium">
          <a href="#" className="hover:text-pink-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
