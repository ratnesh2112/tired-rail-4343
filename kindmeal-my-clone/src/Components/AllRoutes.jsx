import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import TopSection from './TopSection'
import Recipe from '../Pages/Recipe'
import Footer from './Footer'
import { MealDeals } from '../Pages/MealDeals'
import Articles from '../Pages/Articles'
import Help from '../Pages/Help/Help'
import { SignupButtonBox } from '../Pages/SignupButtonBox';
import { FoodLoverSignup } from '../Pages/FoodLoverSignup'
import { Login } from '../Pages/Login'
import { ForgetPassword } from '../Pages/ForgetPassword'
import ArticleDetails from '../Pages/ArticleDetails'


const AllRoutes = () => {
  return (
    <div>
        <TopSection />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={<Recipe /> } />
            <Route path="mealdeal" element={<MealDeals />} />
            <Route path="articles" element={<Articles />} />
            <Route path="help" element={<Help />} />
            <Route path="signupbutton" element={<SignupButtonBox />} />
            <Route path="/FoodSignup" element={<FoodLoverSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ForgetPassword'" element={<ForgetPassword />} />
            <Route path="/name" element={<ArticleDetails />} />
            <Route path="" element={""} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes