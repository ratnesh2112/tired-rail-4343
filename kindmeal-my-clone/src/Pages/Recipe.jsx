import React from "react";
import { Input, 
        Button,
        Text,
        Heading,
      } from "@chakra-ui/react";

import "./Recipe.css";

const Recipe = () => {
  return (
    <>
      <div className="conatiner_R">
        <div className="foodheader">
          <div className="foodheader_1">
            <Heading className="foodDrink_heading" size='lg'>Food & Drinks <span className="yummyFood">| Yummy Meat-Free Recipes</span></Heading>
            <Text className="foodPara">
              Want to craft your own creative meat-free meals? Get inspiration
              from other food lovers, or share your own masterpieces!
            </Text>
            <Text className="">Transfrom into a master chef now.</Text>
          </div>
          <div className="foodheader_2">
            <Input placeholder="Search Recipe or User Name" className="inputBox" />
            <select className="selectBox">
              <option value="option1">All Categories</option>
              <option value="option2">Appertizer</option>
              <option value="option3">Beverages</option>
              <option value="option4">Breakfast</option>
              <option value="option5">Breads</option>
              <option value="option6">Condtiments</option>
              <option value="option7">Desserts</option>
              <option value="option8">Snacks</option>
              <option value="option9">Main Dishes</option>
              <option value="option10">Salads</option>
              <option value="option11">Side Dishes</option>
            </select>
            <Button colorScheme="red" className="searchButton">Search Recipes</Button>
            <Button colorScheme="green" className="shareButton">Share My Recipe</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
