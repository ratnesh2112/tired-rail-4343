import React from 'react'
import styles from './MealDeals.module.css'
import { MealDealsAbout } from '../Components/MealDeals/MealDealsAbout'
import { TopPoster } from '../Components/MealDeals/MealDealsPosters/TopPoster'
import { MealDealsNavigation } from '../Components/MealDeals/Navigation/MealDealsNavigation'
import { BottomPoster } from '../Components/MealDeals/MealDealsPosters/BottomPoster'

export const MealDeals = () => {
    return (
        <div>
            <MealDealsAbout />
            <div className={styles.maindiv}>
                <TopPoster />
                <MealDealsNavigation />
                <MealDealsNavigation />

            </div>
            <BottomPoster />
        </div>
    )
}
