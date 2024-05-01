import React from "react";
import styles from "./MealDealsAbout.module.css";

export const MealDealsAbout = () => {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.aboutsectiondiv}>
        <p className={styles.heading}>Meat-Free Deals</p>
        <p className={styles.headingelement}>| Restaurants In Malaysia</p>
        <p className={styles.smallelements}>
          Browse delicious meat-free, vegetarian deals from top restaurants and
          cafes! Just click on "Get Free Coupon" to obtain instant discounts and
          dine at the restaurants. No upfront payment, booking or printing is
          needed. If you share it on social media, you'll even DOUBLE your
          discount!
        </p>
        <p className={styles.smallelements}>
          Download our mobile app now to easily get coupons and start dining in
          a few seconds. Effortlessly save lives, health, environment and money
          now!
        </p>
      </div>
      <div className={styles.searchdiv}>
        <input
          className={styles.search}
          placeholder="Search Shop or Deal Name"
        />
        <select className={styles.select} placeholder="All Categories">
          <option value="All Categories">All Categories</option>
          <option value="Pasta">Pasta</option>
          <option value="Burger">Burger</option>
          <option value="Brakfasat">Brakfasat</option>
          <option value="Salad">Salad</option>
          <option value="Bakery">Bakery</option>
          <option value="tea & dessert">Tea & Dessert</option>
          <option value="Local Delights">Local Delights</option>
          <option value="Chinies">Chinies</option>
          <option value="Indian">Indian</option>
          <option value="Soup">Soup</option>
          <option value="Cute">Cute</option>
        </select>

        <select className={styles.select} placeholder="All Categories">
          <option value="All Location">All Location</option>
          <option value="	Klang Valley">Klang Valley</option>
          <option value="Kuala Lumpur">Kuala Lumpur</option>
          <option value="Petaling Jaya">Petaling Jaya</option>
          <option value="Ampang">Ampang</option>
          <option value="Bangsar">Bangsar</option>
          <option value="Bangsar South">Bangsar South</option>
          <option value="Ipoh">Ipoh</option>
          <option value="Bukit Bintang">Bukit Bintang</option>
          <option value="Bukit Damansara">Bukit Damansara</option>
          <option value="Cheras">Cheras</option>
          <option value="Damansara Height">Damansara Height</option>
        </select>

        <button
          className={styles.button}
          style={{ backgroundColor: "rgb(245,56,56)" }}
        >
          Search Deals
        </button>
        <button
          className={styles.button}
          style={{ backgroundColor: "rgb(4,190,90)" }}
        >
          Browse Restaurants
        </button>
      </div>
    </div>
  );
};
