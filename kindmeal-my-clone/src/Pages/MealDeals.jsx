import React from 'react'
import styles from './MealDeals.module.css'
import { MealDealsAbout } from '../Components/MealDeals/MealDealsAbout/MealDealsAbout'
import { TopPoster } from '../Components/MealDeals/MealDealsPosters/TopPoster'
import { MealDealsNavigation } from '../Components/MealDeals/Navigation/MealDealsNavigation'
import { BottomPoster } from '../Components/MealDeals/MealDealsPosters/BottomPoster'
import { ProductComponents } from '../Components/MealDeals/MealDealsProductComponents/ProductComponents'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const MealDeals = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(" http://localhost:8080/MealDealsData").then((res) => {
            setdata(res.data);
            console.log(res.data)
        })
    }, [])
    // function getdata(){

    // }

    return (
        <div>
            <MealDealsAbout />
            <div className={styles.maindiv}>
                <TopPoster />
                <MealDealsNavigation />
                <div className={styles.componentdiv}>
                    {data.map(e => {
                        return (
                            <ProductComponents data={e} />
                        )
                    })}
                </div>

                <MealDealsNavigation />
            </div>
            <BottomPoster />
        </div>
    )
}
