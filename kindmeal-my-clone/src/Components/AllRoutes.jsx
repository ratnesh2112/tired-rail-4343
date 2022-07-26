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
import { PrivateRoute } from '../Pages/PrivateRoute'
import {RecipeDetail} from '../Pages/RecipeDetail'


const AllRoutes = () => {
  return (
    <div>
        <TopSection />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={
              <PrivateRoute>
                <Recipe /> 
              </PrivateRoute>
              } 
            />
            <Route path="mealdeal" element={
              <PrivateRoute>
                <MealDeals /> 
              </PrivateRoute>
              } 
            />
            <Route path="articles" element={<Articles />} />
            <Route path="help" element={<Help />} />
            <Route path="signupbutton" element={<SignupButtonBox />} />
            <Route path="/FoodSignup" element={<FoodLoverSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ForgetPassword'" element={<ForgetPassword />} />
            <Route path="/articles/:name" element={<ArticleDetails />} />
            <Route path="RecipeDetail" element={<RecipeDetail />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes