import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import TopSection from './TopSection'
import Recipe from '../Pages/Recipe'
import Footer from './Footer'
import { MealDeals } from '../Pages/MealDeals'

const AllRoutes = () => {
  return (
    <div>
        <TopSection />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={ <Recipe /> } />
            <Route path="mealdeal" element={<MealDeals />} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes