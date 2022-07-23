import React from 'react'
import styles from './TopPoster.module.css'

export const TopPoster = () => {
    return (
        <div>
            <div className={styles.posterdiv}>

                <img className={styles.image} src='https://www.kindmeal.my/photos/shop/5/570-c.jpg' alt='poster image' />
                <p className={styles.heading}>Figure Out Cafe</p>

            </div>
            <img className={styles.logoimage}
                src='https://www.kindmeal.my/photos/shop/5/570-4268-m.jpg'
                alt='cafe logo'
            />
            <div className={styles.linkdivmain}>
                <div className={styles.linkdiv}>
                    <a className={styles.attribute}>Overview</a>
                    <a className={styles.attribute}>Meal Deal</a>
                    <a className={styles.attribute}>Food Menu</a>
                    <a className={styles.attribute}>Location</a>
                </div>
                <div>
                    <button>background</button>
                </div>
            </div>

        </div>
    )
}
