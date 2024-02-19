import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from '../../HomePage/Slider'
import DigitalGold from '../DigitalGold'
import CatProductDetails from '../ProductDetails'
import ProductDetails from '../CatProductDetails'
import Payment from '../Payment'

export const AllRoutes = () => { 
  return (
    <Routes>
        <Route path="/" element={<Slider/>} />
        <Route path="/digitalgold" element={<DigitalGold/>} />
        <Route path="/ProductDetails/:cardId" element={<ProductDetails />} />
      cc<Route path="/CatProductDetails/:cardId" element={<CatProductDetails />} />
        <Route path="/Payment" element={<Payment/>} />
        {/* <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> */}
    </Routes>
  )
}
