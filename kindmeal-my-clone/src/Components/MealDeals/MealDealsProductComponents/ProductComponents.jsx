import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductComponents.module.css'

export const ProductComponents = ({ data }) => {
    return (
        <div className={styles.maindiv}>
            <Link to={`productpage/${data.id}`}>
                <div className={styles.imagediv}>
                    <img className={styles.image} src={data.imageUrl} alt='productImage' />
                    <p className={styles.heading}>{data.foodName}</p>
                </div>
            </Link>
            <div className={styles.infodiv}>
                <p className={styles.dheading}>{data.cafeName} - </p>
                <p className={styles.dsubheading}>{data.cafeLocation}</p>
                <p className={styles.description}>{data.description1}</p>
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
                        <p style={{ "marginTop": "7px", "marginLeft": "10px" }}>({data.rating})</p>
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
                    <p className={styles.discountp2}>{data.discount}</p>
                </div>
                <div className={styles.expire}>
                    <p className={styles.discountp1}>Expires In</p>
                    <p className={styles.expirep2}>{data.expire}</p>
                </div>
            </div>
        </div>
    )
}
