import React from "react";
import { Input, 
        Button,
        Text,
        Heading,
      } from "@chakra-ui/react";

import "./Recipe.css";
import axios from "axios"
import { useState, useEffect } from "react";



const Recipe = ({filters}) => {

  const [resDetail, setResDetail] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchURL =
    "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

  useEffect(() => {
    getAllResDetails();
  }, []);

  useEffect(() => {
    setFilteredRes(
      resDetail.filter((res) => Number(res.hotelRating) >= filters.rating)
    );
  }, [resDetail, filters]);

  const getAllResDetails = () => {
    axios
      .get(fetchURL)
      .then((res) => {
        const allDetails = res.data.foodDetails;
        setResDetail(allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };



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

         {/* second day work */}

         <div className="button_Container">
          <div className="button_row1">
              <Button className="sortButton_1">All Categories</Button>
              <Button className="sortButton_1">Appetizers</Button>
              <Button className="sortButton_1">Beverages</Button>
              <Button className="sortButton_1">Breakfast</Button>
              <Button className="sortButton_1">Breads</Button>
              <Button className="sortButton_1">Condiments</Button>
          </div>
          <div className="button_row1">
              <Button className="sortButton_2">Desserts</Button>
              <Button className="sortButton_2">Snacks</Button>
              <Button className="sortButton_2">Main Dishes</Button>
              <Button className="sortButton_2">Salads</Button>
              <Button className="sortButton_2">Side Dishes</Button>
              <Button className="sortButton_2">Soups</Button>
          </div>
         </div>


      </div>






    </>
  );
};

export default Recipe;
