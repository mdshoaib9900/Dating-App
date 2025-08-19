import React from 'react'
import { Route } from 'react-router-dom';

export default function Hero() {
    return (
      <section className="relative  h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white py-20 px-6 text-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
  
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Match ❤️
          </h1>
  
          {/* Subtext */}
          <p className="text-lg md:text-xl mb-8 text-pink-100">
            Join DateVerse and connect with people who truly vibe with you.
          </p>
  
          {/* CTA buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-100 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white/20 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  }
  