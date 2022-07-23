import React from 'react'
import styles from './DescriptionTopPoster.module.css'

export const DescriptionTopPoster = ({ data }) => {
    return (
        <div>
            <div className={styles.posterdiv}>
                <img className={styles.image} src={data.cafePoster} alt='poster image' />
                <p className={styles.heading}>{data.cafeName}</p>
            </div>
            <img className={styles.logoimage}
                src={data.cafeLogo}
                alt='cafe logo'
            />
            <div className={styles.linkdivmain}>
                <div className={styles.linkdiv}>
                    <a className={styles.attribute}>Overview</a>
                    <a className={styles.attribute}>Meal Deal</a>
                    <a className={styles.attribute}>Food Menu</a>
                    <a className={styles.attribute}>Location</a>
                </div>
            </div>
        </div>
    )
}
