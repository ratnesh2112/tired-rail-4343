import React from 'react'
import styles from './TopPoster.module.css'

export const TopPoster = () => {
    return (
        <div>
            <a href='https://www.facebook.com/KindMeal.my/videos/1684699314923680/' target="_blank">
                <img
                    className={styles.image}
                    src='https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg'
                    alt='posterImage'
                />
            </a>

        </div>
    )
}
