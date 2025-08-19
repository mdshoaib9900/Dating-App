import React from 'react'
import { Outlet } from 'react-router-dom'   
import Header from './src/Components/Header/Header'
import Footer from './src/Components/Footer/Footer'
import Hero from './src/Components/Hero/Hero'
function Layout() {
  return (
   <div className="h-screen w-full flex flex-col bg-white overflow-x-hidden">
   <Header/>
   <Hero/>
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default Layout