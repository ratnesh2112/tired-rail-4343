import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import TopSection from './TopSection'

const AllRoutes = () => {
  return (
    <div>
        <TopSection />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={ ""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
            <Route path="" element={""} />
        </Routes>
    </div>
  )
}

export default AllRoutes