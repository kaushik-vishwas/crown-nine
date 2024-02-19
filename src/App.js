import React from 'react'
import Slider from './HomePage/Slider'
import { Shaya } from './HomePage/shaya'
import HomeCards from './HomePage/HomeCards'
import Footer from './Components/Footer'
import Instagram from './HomePage/ShoponInstagram'
import DigitalGold from './Components/DigitalGold'
import { AllRoutes } from './Components/AllRoutes/AllRoutes'
import Navbar from './Components/Navbar'


function App()  {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}
export default App

