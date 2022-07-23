import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { DetailDescription } from '../Components/ProductPage/ProductDescriptionComponent/DetailDescription'
import { DescriptionTopPoster } from '../Components/ProductPage/ProductPosters/DeacriptionTopPoster'

export const ProductPage = () => {

  const {id}=useParams();
  const[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8080/MealDealsData/${id}`).then((res)=>{
      setdata(res.data)
    })
  },[])

  return (
    <div>
      <DescriptionTopPoster data={data}/>
      <DetailDescription data={data} />
    </div>
  )
}
