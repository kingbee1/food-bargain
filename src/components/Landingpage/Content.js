import React from 'react'
import hero1 from '../../images/hero1.png'
import hero2 from '../../images/hero2.png'
import hero3 from '../../images/hero3.png'
import food1 from '../../images/food1.png'
import food2 from '../../images/food2.png'
import food3 from '../../images/food3.png'
import food4 from '../../images/food4.png'
import babyfood from '../../images/babyfood.png'


const Hero = () => {
    return(
        <div>
            <div className="below-nav">
                <p>Groceries</p>
                <p>Bakery</p>
                <p>Restaurants</p>
            </div>
            <div className="eat-more flex justify-between">
                <div className="child left">
                    <h1 className="hero-side">Eat <span className="p-green">more for less</span> and fight food <br/> waste</h1>
                    <p>Pick up and eat all you can from fresh food items that are close to their expiry dates at discounted prices from your favourite restaurants and grocery stores.</p>
                </div>
                <div className="child right">
                    <div className="hero-image1 flex justify-between">
                        <img src={hero1} alt="food" />
                        <img src={hero2} alt="food" />
                    </div>
                    <div className="hero-image2 flex justify-center">
                        <img src={hero3} alt="food" />
                    </div>
                </div>
            </div> 
          <section className="feature">
            <p className="feature-text">Trending Restaurants</p>
            <div className="flex justify-between">
                <div className="feature-pic1">
                    <img src={food1} alt="food" />
                    <p>Chicken Republic</p>
                </div>
                <div className="feature-pic2">
                    <img src={food2} alt="food" />
                    <p>Southern House</p>
                </div>
                <div className="feature-pic3">
                    <img src={food3} alt="food" />
                    <p>Domino's Pizza</p>
                </div>
                <div className="feature-pic4">
                    <img src={food4} alt="food" />
                    <p>Ben's Bistro</p>
                </div>
            </div>
          </section>
            <div className="reward flex justify-between">
                <div>
                    <img src={babyfood} alt="" />
                </div>
                <div className="reward2">
                    <p className="r2">Members get <span className="p-green">exclusive</span> rewards</p>
                    <p className="r3">Become a member and get even more food for less.</p>
                    <button className="btn">Sign up Now</button>
                </div>
            </div>
            <div className="carou">
                <p className="title"> Oops! You just missed it</p>
                <div className="flex justify-between">
                    <div>
                        <img src={food1} alt="food" />
                        <p>Stir Fry Noodles</p>
                        <p>N 5,400</p>
                    </div>
                    <div>
                        <img src={food2} alt="food" />
                        <p>Stir Fry Noodles</p>
                        <p>N 5,400</p>
                    </div>
                    <div>
                        <img src={food3} alt="food" />
                        <p>Stir Fry Noodles</p>
                        <p>N 5,400</p>
                    </div>
                    <div>
                        <img src={food4} alt="food" />
                        <p>Stir Fry Noodles</p>
                        <p>N 5,400</p>
                    </div>
                   
                </div>
            </div>
            <div className="blog flex justify-between">
                <div>
                    <p className="blog1">Food Bargains <span className="p-green">blog</span></p>
                    <p className="blog2">Specially curated and relevant stories on food waste management and its environmental impacts to keep you quite as committed as we are to the fight against food waste. </p>
                    <p className="blog3 p-green">Check it out >>></p>
                </div>
                <div>
                    <div className="test"></div>
                    <div className="blog-right">
                    <img src={food1} alt="bargains" />    
                    <p className="right1">Ssaving the world, one meal at a time</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Hero;