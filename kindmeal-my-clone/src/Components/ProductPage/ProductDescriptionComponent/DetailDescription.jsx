import React from 'react'
import styles from './DetailDescription.module.css'

export const DetailDescription = ({data}) => {
  return (
    <div className={styles.maindiv}>
      <div className={styles.heading}>
        {data.foodName}
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className={styles.maindiv2}>
        <div className={styles.imagediv}>
          <img className={styles.image} src={data.imageUrl} alt='productImage' />
          <p className={styles.myheading}>Offer Expires In {data.expire} Days</p>
        </div>
        <div className={styles.pricemaindiv}>
          <div className={styles.pddiv}>
            <div style={{ "borderWidth": "thin" }}>
              <p className={styles.p1}>Normal Price</p>
              <p className={styles.p2}>{data.price}</p>
              <p className={styles.p3}>&  Above</p>
            </div>
            <div style={{ "borderBottomWidth": "thin" }}>
              <p className={styles.d1}>KindMeal Discount</p>
              <p className={styles.d2}>{data.discount}</p>
            </div>
          </div>
          <div className={styles.coupondiv}>
            <p className={styles.p4}>No pre-payment or booking needed. Get coupon & dine instantly!</p>
            <button className={styles.coupons}>
              Get FREE Coupon
            </button>
            <p className={styles.p5}>Grab this KindMeal Coupon now to enjoy 10% off!   How it works</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------- */}
      <div className={styles.detailmaindiv}>
        <div className={styles.detaildiv}>
          <p className={styles.detailheading}>Delicious Details</p>
          <p>
            Indulge in Malay-Indo fusion cuisine, a plant-based
            comfort food and healthy pleasure!
          </p>
          <p>
            Hijau is your go-to, where you can embrace
            delicious vegan food together like love at first sight.
          </p>
          <ul>BREAKFAST
            <li>Nasi Lemak Hijau</li>
            <li>Hijau Lontong</li>
            <li>Roti Canai Cheese</li>
            <li>Nasi Kerabu</li>
          </ul>
          <ul>STARTER
            <li>Tempeh Chips</li>
            <li>Tauhu Bakar</li>
            <li>Ulam Dara</li>
            <li>Kari Puff</li>
            <li>Sambal Bomb</li>
          </ul>
          <ul>FUSION
            <li>Burger Ulam Kampung</li>
            <li>Grilled Cheese Rendang</li>
          </ul>
          <ul>DAILY MAIN
            <li>Kuey Teow Goreng</li>
            <li>Indomee Dendeng</li>
            <li> Indomee Kari</li>
            <li> Nasi Goreng Hijau</li>
            <li>Nasi Goreng Nenek</li>
            <li>Nasi Ikan Belado</li>
            <li>Nasi Padang</li>
          </ul>
          <ul>DRINKS
            <li>Sirap Selasih</li>
            <li>Sirap Bandung</li>
            <li>Teh Bunga Telang</li>
            <li>Susu Bunga Telang</li>
            <li>Teh Serai Pandan</li>
            <li>Teh Susu</li>
            <li>Hijau Lemonade</li>
            <li>Hijau Latte</li>
          </ul>
          <ol>*** Note ***
            <li>Discount is not valid other promotional items.</li>
            <li> Discount is not valid for delivery, only for dine-in and take-away.</li>
          </ol>
        </div>


        <div className={styles.locationdiv}>
          <p className={styles.detailheading}>Location</p>
          <p>REX KL, 80, Jalan Sultan, City Centre, 50000 Kuala Lumpur, Kuala Lumpur.</p>
          <p>Opens: Tue - Sun: 12am - 9pm; Mon: Closed</p>
          <p>Tel: 011-37507708</p>
          <a style={{ color: "blue" }}>
            <p>View Details & Location Map »</p>
          </a>
          <div className={styles.terms}>
            <p className={styles.detailheading}>Terms & Conditions</p>
            <div className={styles.mydiv}>
              <p style={{ "fontSize": "16px" }}>Coupon Validity</p>
              <p>Must use coupon by Jul 28th, 2022</p>
            </div>
            <div className={styles.mydiv}>
              <p style={{ "fontSize": "16px" }}>Exclusivity</p>
              <p>Valid with other KindMeal.my coupons only</p>
            </div>
            <div className={styles.mydiv}>
              <p style={{ "fontSize": "16px" }}>Reservation</p>
              <p>Not required</p>
            </div>
            <div className={styles.mydiv}>
              <p style={{ "fontSize": "16px" }}>Dining Terms</p>
              <ul>
                <li>No Service Charge & SST</li>
                <li>Discount is not valid other promotional items</li>
                <li>Discount is not valid for delivery, only for dine-in and take-away</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
