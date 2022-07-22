import React from 'react'
import styles from './ProductComponents.module.css'

export const ProductComponents = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.imagediv}>
                <img className={styles.image} src='https://www.kindmeal.my/photos/deal/5/590-3137-l.jpg' alt='productImage' />
                <p className={styles.heading}>shdgivam</p>
            </div>
            <div className={styles.infodiv}>
                <p className={styles.dheading}>Rawsome - </p>
                <p className={styles.dsubheading}> Sungai Buloh, Selangor</p>
                <p className={styles.description}>
                    Enjoy healthy, guilt-free, raw food meals artfully crafted for
                    a nutritious and delicious experience.
                    Indulge in a satisfying mea..
                </p>
                <div className={styles.coupondiv}>
                    <button className={styles.button}>Get Free Coupon</button>
                    <div className={styles.stardiv}>
                        <div className={styles.star}>
                            <img className={styles.starimage} src='https://www.kindmeal.my/images/icon_star.png' alt='star' />
                            <img className={styles.starimage} src='https://www.kindmeal.my/images/icon_star.png' alt='star' />
                            <img className={styles.starimage} src='https://www.kindmeal.my/images/icon_star.png' alt='star' />
                            <img className={styles.starimage} src='https://www.kindmeal.my/images/icon_star.png' alt='star' />
                            <img className={styles.starimage} src='https://www.kindmeal.my/images/icon_star.png' alt='star' />
                        </div>
                        <p style={{ "marginTop": "7px", "marginLeft": "10px" }}>(6)</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomdiv}>
                <div className={styles.icon}>
                    <img className={styles.iconimage} src="https://www.kindmeal.my/images/icon_egg.png" alt="egg" />
                    <img className={styles.iconimage} src="https://www.kindmeal.my/images/icon_milk_disabled.png" alt="milk" />
                    <img className={styles.iconimage} src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="alcohal" />
                </div>
                <div className={styles.discount}>
                    <p className={styles.discountp1}>KindMeal Discount</p>
                    <p className={styles.discountp2}>20% Off</p>
                </div>
                <div className={styles.expire}>
                    <p className={styles.discountp1}>Expires In</p>
                    <p className={styles.expirep2}>7 Days</p>
                </div>
            </div>
        </div>
    )
}
