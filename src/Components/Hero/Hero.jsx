import React from 'react'
import logo from "../../assets/logo.png";
import heroLogo from "../../assets/heroLogo.png";

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Aurora Dream Diagonal Flow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 10% 30%, rgba(255, 150, 200, 0.55), transparent 70%),
            radial-gradient(ellipse 65% 55% at 80% 25%, rgba(120, 190, 255, 0.55), transparent 70%),
            radial-gradient(ellipse 60% 60% at 20% 80%, rgba(255, 235, 170, 0.55), transparent 65%),
            radial-gradient(ellipse 60% 50% at 85% 70%, rgba(175, 109, 255, 0.55), transparent 65%),
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 182, 193, 0.4), transparent 70%),
            linear-gradient(45deg, #ffe6f0 0%, #e6f7ff 100%)
          `,
        }}
      />

      <section className="relative h-screen">
        <div className="max-w-screen-xl mx-auto h-full grid md:grid-cols-2 items-center px-6">
          
          {/* Left Side - Text */}
          <div className="text-center md:text-left"> 
            <h1 className="text-4xl md:text-5xl font-bold mb-4"> Where Engineering Minds Meet Hearts </h1> 
            <p className="text-lg md:text-xl mb-6 text-red-700"> AsWeMeet is the dating app designed for engineers. Whether you’re debugging code or life, find someone who shares your passion for problem-solving, innovation, and meaningful connections. </p> 
            <p className="text-md md:text-lg mb-8 text-blue-900"> Because love, just like engineering, is about building something that lasts.  </p> 
            <h1 className="text-4xl md:text-5xl font-bold mb-4"> Meet. Connect. Debug </h1> <p className="text-lg md:text-xl mb-6 text-red-900"> AsWeMeet helps you find meaningful connections with people who truly vibe with you. </p> 
            <div className="flex justify-center md:justify-start gap-4"> 
                <button className="bg-white hover:bg-red-100 cursor-pointer text-pink-600 font-semibold px-6 py-3 rounded-full shadow transition"> Get Started </button> 
                <button className="border border-white px-6 py-3 rounded-full hover:bg-red-100 cursor-pointer hover:bg-white/20 transition"> Learn More </button>
                 </div> </div>
    
          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroLogo}
              alt="AsWeMeet Hero"
              className="w-80 md:w-[30rem] lg:w-[36rem] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
