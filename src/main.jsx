import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Layout from '../Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
