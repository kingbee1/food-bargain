import React from 'react'

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
            </div> 
        </div>
    )

}

export default Hero;