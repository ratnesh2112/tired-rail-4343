import React from 'react'
import { useState } from 'react'
import styles from './MealDealsNavigation.module.css'

export const MealDealsNavigation = () => {

    const [limit, setlimit] = useState(2);
    const Button = () => {
        if (limit === 1) {
            return (
                <button className={styles.buttons}>"Next"</button>
            )
        } else if (limit === 7) {
            return (
                <button className={styles.buttons}>"Prev"</button>
            )
        } else {
            return (
                <>
                    <button className={styles.buttons}>"Prev"</button>
                    <button className={styles.buttons}>"Next"</button>
                </>
            )
        }
    }


    return (
        <div className={styles.navigation}>
            <p className={styles.page}>
                Page:
                <button className={styles.button}>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>
                <button className={styles.button}>4</button>
                <button className={styles.button}>5</button>
                <button className={styles.button}>6</button>
                <button className={styles.button}>7</button>
            </p>
            <div>
                <Button />
            </div>
        </div>
    )
}
