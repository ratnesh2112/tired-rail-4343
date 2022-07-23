import React from 'react'
import "./RecipeDetail.css"


export const RecipeDetail = () => {
  return (
    <div>
        
        <div className='container_boxmain'>
            <div className='bigImage'>
                <img src="https://www.kindmeal.my/photos/member/0/6-c.jpg" alt="" />
            </div>
            <div>
              <div className='kindmeal1234'>Kind Meal Chef | 14 Follower</div>
              <div className='kindmeal1238'>
                <div className='kindmeal1235'> + Follow Member</div>
                <div className='kindmeal1236'>Contact Member</div>
              </div>
            </div>
            <div className='lightbox_container'>
              <div className='lightbox'>
                <p>Light Greek Salad Dressing</p>
              </div>
              <div className="imageTime_container">
                <div className='image_container'>
                  <img src="https://www.kindmeal.my/photos/recipe/106/106687-16097-m.jpg" alt="" />
                </div>
                <div className='another_box'>
                  <div className='grid_name1'>
                    <div className='grid_name2'>
                      <h3>Time</h3>
                      <p>10 Mins</p>
                    </div>
                    <div className='grid_name2'>
                      <h3>Servings</h3>
                      <p>1 Cup</p>
                    </div>
                  </div>
                  <div className='grid_name1'>
                    <div className='grid_name2'>
                      <h3>Diet Restiction</h3>
                      <p>- - -</p>
                    </div>
                    <div className='grid_name2'>
                      <h3>Rating</h3>
                      <p>0 Votes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='description_box'>
             <div className='description_box1'>
              <div className='description_box2'>
                <h2>Secret Ingredaint</h2>
                <ul>
                  <li>1/2 cup red wine,vingar</li>
                  <li>1 garlic clove, minced</li>
                  <li>1 teaspoon fresh oregano</li>
                  <li>1 reaspoon fresh basil, minced</li>
                  <li>dijon mustard</li>
                  <li>salt to taste</li>
                  <li>pepper to taste</li>
                </ul>
              </div>
              <div className='description_box3'>
                <h2>Direction</h2>
                <p>1. Combine all infredients expect oil in medium mixing bowl with wire whisk. Once ingredients are combined slowly pour in olive oil while whisking to form an emulsion.</p>
              </div>
             </div>
             <div className='description_box4'>
              <h3>More Photos Of This Recipe</h3>
              <div>
                <img src="https://www.kindmeal.my/photos/recipe/106/106687-16098-s.jpg" alt="" />
                <img src="https://www.kindmeal.my/photos/recipe/106/106687-16099-s.jpg" alt="" />
              </div>
             </div>
            </div>
            <div className='monkeyAd'>
              <img src="https://www.kindmeal.my/images/ads/banner_ekoeko-1100x280.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}
