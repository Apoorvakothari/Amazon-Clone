import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2018/PVLandingPage/Header/1242x450_Mobile-Landing-Page-Header_Web.jpg" alt=''>
            </img>

            <div className="home__row"> 
            <Product/>
            <Product/>
            </div>

            <div className="home__row"> 
            {/* Product */}
            {/* Product */}
            {/* Product */}
            </div>

            <div className="home__row"> 
            {/* Product */}
            </div>

        </div>
    </div>
  )
}

export default Home
