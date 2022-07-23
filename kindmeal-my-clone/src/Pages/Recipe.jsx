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
      <div className="aboutsection_RP">
            <div className="aboutsectiondiv_RP" >
                <p className="heading_RP">Food & Drinks</p>
                <p className="headingelement_RP">|    Yummy Meat-Free Recipes</p>
                <p className="smallelements_RP">
                    Want to creaft your creative meat-free meals? Get inspiration from other food lovers, or share your own mastespieces!
                </p>
                <p className="smallelements_RP">
                    Transfrom into a master chef now.
                </p>
            </div>
            <div className="searchdiv_RP">
                <input className="search_RP" placeholder='Search Shop or Deal Name' />
                <select className="select_RP" placeholder='All Categories'>
                    <option value='All Categories'>All Categories</option>
                    <option value='Pasta'>Pasta</option>
                    <option value='Burger'>Burger</option>
                    <option value='Brakfasat'>Brakfasat</option>
                    <option value='Salad'>Salad</option>
                    <option value='Bakery'>Bakery</option>
                    <option value='tea & dessert'>Tea & Dessert</option>
                    <option value='Local Delights'>Local Delights</option>
                    <option value='Chinies'>Chinies</option>
                    <option value='Indian'>Indian</option>
                    <option value='Soup'>Soup</option>
                    <option value='Cute'>Cute</option>
                </select>

                <select className="select_RP" placeholder='All Categories'>
                    <option value='All Location'>All Location</option>
                    <option value='	Klang Valley'>Klang Valley</option>
                    <option value='Kuala Lumpur'>Kuala Lumpur</option>
                    <option value='Petaling Jaya'>Petaling Jaya</option>
                    <option value='Ampang'>Ampang</option>
                    <option value='Bangsar'>Bangsar</option>
                    <option value='Bangsar South'>Bangsar South</option>
                    <option value='Ipoh'>Ipoh</option>
                    <option value='Bukit Bintang'>Bukit Bintang</option>
                    <option value='Bukit Damansara'>Bukit Damansara</option>
                    <option value='Cheras'>Cheras</option>
                    <option value='Damansara Height'>Damansara Height</option>
                </select>

                <button className="button_RP" style={{ "backgroundColor": "rgb(245,56,56)" }}>Search Deals</button>
                <button className="button_RP" style={{ "backgroundColor": "rgb(4,190,90)" }}>Browse Restaurants</button>

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

      {/* Number Button */}

      <div className="navigation_R">
            <p className="page_R">
                Page:
                <button className="button_R">1</button>
                <button className="button_R">2</button>
                <button className="button_R">3</button>
                <button className="button_R">4</button>
                <button className="button_R">5</button>
                <button className="button_R">6</button>
                <button className="button_R">7</button>
            </p>
            <div>
                <button className="buttons_R">"Prev"</button>
                <button className="buttons_R">"Next"</button>
            </div>
        </div>


        <div className="card_container">
          <div className="card_row_1">
            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">KindMealChef</p>
                </div>
                <button className="card_view_button" >
                  <a href="./RecipeDetail">View</a>
                </button>
              </div>
              <div className="card_part2" >
                <img src="https://www.kindmeal.my/photos/recipe/106/106687-16097-m.jpg" alt="" />
                <div className="textonimage">Light Greek Salad Dressing</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>10 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">LoveMeal</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg" alt="" />
                <div className="textonimage">Vegetarian VFC</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>1 Hr</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>5</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>10</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">MayNg</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/97/97126-13673-m.jpg" alt="" />
                <div className="textonimage">Rummilicious</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>30 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2nd  */}

          <div className="card_row_1">
            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">RahulDelicious</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039459-58887-m.jpg" alt="" />
                <div className="textonimage">Stir-fired Brroccoli Rice</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>2 Hr</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">MealdealSpecial</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039465-58896-m.jpg" alt="" />
                <div className="textonimage">Easy 10 minute Dinner Recipes</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>90 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">ChasmisKhushi</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039456-58883-m.jpg" alt="" />
                <div className="textonimage">Eggles Sponge Vanilla Cake</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>50 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Image */}

          <div className="ad_container">
            <img src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg" alt="" />
          </div>

          {/* Row 3rd */}

          <div className="card_row_1">
            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">SarfiDish</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039472-58905-m.jpg" alt="" />
                <div className="textonimage">Hokkaido Cheese Tart</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>30 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">CookLove</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1000/1000011-19418-m.jpg" alt="" />
                <div className="textonimage">Nasi Lemak</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>1 Hr</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">KindMealChef</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039467-58898-m.jpg" alt="" />
                <div className="textonimage">Crunchy Chocolate Chip</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>2 Hr</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4th */}

          <div className="card_row_1">
            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">KindMealChef</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039470-58903-m.jpg" alt="" />
                <div className="textonimage">Choccolate Cake</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>40 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">DeliciouCook</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1039/1039478-58911-m.jpg" alt="" />
                <div className="textonimage">Donuts</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>60 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>

            <div className="card_compound_1">
              <div className="card_part1">
                <div className="card_dp_pic">
                  <img src="https://www.kindmeal.my/photos/member/0/6-s.jpg" alt="" />
                </div>
                <div className="card_authorname">
                  <p className="card_author">KindMealChef</p>
                </div>
                <button className="card_view_button">
                  <p>View</p>
                </button>
              </div>
              <div className="card_part2">
                <img src="https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg" alt="" />
                <div className="textonimage">Coconutbanana Smoothie</div>
              </div>
              <div className="card_part3">
                <div className="cardpart3_text1">
                  <img src="https://www.kindmeal.my/images/icon_time_small.png" alt="" />
                  <p>70 Min</p>
                </div>
                <div className="cardpart3_text2">
                  <img src="https://www.kindmeal.my/images/icon_heart_small.png" alt="" />
                  <p>0</p>
                </div>
                <div className="cardpart3_text3">
                  <img src="https://www.kindmeal.my/images/icon_commentbubble_small.png" alt="" />
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Recipe;