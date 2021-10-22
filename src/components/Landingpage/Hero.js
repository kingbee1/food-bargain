import React from 'react'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'

const Hero = () => {
    return(
        <div>
            <div className="below-nav">
                <p>Groceries</p>
                <p>Bakery</p>
                <p>Restaurants</p>
            </div>
                <div className="side">
                <h1 className="hero-side">Eat <span className="p-green">more for less</span> and fight food waste</h1>
                <p>Pick up and eat all you can from fresh food items that are close to their expiry dates at discounted prices from your favourite restaurants and grocery stores.</p>
                <div className="hero-image1">
                    <img src={hero1} alt="food" />
                    <img src={hero2} alt="food" />
                </div>
                <div className="hero-image2">
                    <img src={hero3} alt="food" />
                </div>
            </div> 
          
        </div>
    )

}

export default Hero;