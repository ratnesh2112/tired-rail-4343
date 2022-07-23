import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <Box width="100%" height="350px" bgColor="#2bb673">
      <Box width="65%" gap="30px" display="flex" margin="auto">
       
       <Box width="20%" textAlign="start" color="white" marginTop="20px">
        <p>General</p>
        <h1 className={styles.h}>Home</h1>
        <h1 className={styles.h}>Sign Up</h1>
        <h1 className={styles.h}>Businesses / Restauranteurs</h1>
        <h1 className={styles.h}>Advertising</h1>
        <h1 className={styles.h}>About KindMeal.my</h1>
        <h1 className={styles.h}>Help & FAQ</h1>
        <h1 className={styles.h}>Terms & Condition</h1>
        <h1 lassName={styles.h}>Inspiring Partners</h1>
        <h1 className={styles.h}>Lifestyle Ambassadors</h1>
        <h1 className={styles.h}>Jobs & Careers</h1>
        <h1 className={styles.h}>Contact Us</h1>
       </Box>
       <Box width="20%" textAlign="start" color="white" marginTop="20px">
       <p>Features</p>
        <h1 className={styles.h}>Meat-Free Deals</h1>
        <h1  className={styles.h}>Tasty Menus</h1>
        <h1 className={styles.h}>Kind Moments</h1>
        <h1 className={styles.h}>Meat-Free Recipes</h1>
        <h1 className={styles.h}>Member Recommendation</h1>
        <h1 className={styles.h}>Featured Restaurants</h1>
        <h1 className={styles.h}>Vegetarian & Vegan Directory</h1>
        <h1 className={styles.h}>Food Map</h1>
        <h1 className={styles.h}>Become A Superhero</h1>
        <h1 className={styles.h}>Vegan News & Vegetarian Articles</h1>
        <h1 className={styles.h}>Latest Comments</h1>

       </Box>
       <Box  width="20%" textAlign="start" color="white" marginTop="20px">
       <p>Social Media</p>
        <h1 className={styles.h}>KindMeal Widget</h1>
        <h1 className={styles.h}>Facebook</h1>
        <h1 className={styles.h}>Twitter</h1>
        <h1 className={styles.h}>Instagram</h1>
       </Box>
       <Box width="23%" textAlign="start" color="white" marginTop="20px">
       <p>Mobile</p>
        <h1 className={styles.h}>iphone & ipod App</h1>
        <h1 className={styles.h}>Android App</h1>
        <br />
       <p>Exciting Promos</p>
        <h1 className={styles.h}>Gadhimai:Ending Mass Slaughter</h1>
        <h1 className={styles.h}>Free Meals</h1>
        <h1 className={styles.h}>Food Bloggers</h1>
        <h1 className={styles.h}>Uber CHIRP</h1>
        <h1 className={styles.h}>Jane Gooddall Contest</h1>
        <h1 className={styles.h}>Win Digi iphone 12</h1>
        <h1 className={styles.h}>Feed The Poor</h1>
        <h1 className={styles.h}>Win Superhero Gifts</h1>
        <h1 className={styles.h}>Win an ipad Mini 3</h1>

       </Box>
       <Box  width="20%" height="100px" textAlign="start" color="white" marginTop="20px">
       <p>PetFinder.my</p>
        <h1 className={styles.h}>Adopt A Pet</h1>
        <h1 className={styles.h}>Smartphone Apps</h1>
        <h1 className={styles.h}>WAGazine</h1>
        <h1 className={styles.h}>Discussion Forum</h1>
        <h1 className={styles.h}>Medical Fund</h1>
       </Box>
      </Box>
      <Box style={{fontSize:"11px",color:"rgb(239, 233, 233)",padding:"15px"}}>
        <h2>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</h2>
        <h2>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</h2>
      </Box>
    </Box>
  )
}

export default Footer