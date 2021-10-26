import React from 'react';
import Footer from '../components/Landingpage/Footer';
import Navbar from '../components/Landingpage/Navbar';
import rs1 from '../images/rs1.png'
import bk2 from '../images/bk2.png'
import bk3 from '../images/bk3.png'
import bk4 from '../images/bk4.png'
import bk5 from '../images/bk5.png'
import bk6 from '../images/bk6.png'
import bk7 from '../images/bk7.png'
import bk8 from '../images/bk8.png'
import bk9 from '../images/bk9.png'

const Restaurants = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-between top-bakery">
        <p>Home </p>
        <p> > </p>
        <p>Restaurants</p>
        <p> > </p>
        <p> Breakfast </p>
        </div>
        <div className="members">
            <p className="members-p">REGISTERED MEMBERS GET EXCLUSIVE REWARDS & FREEBIES</p>
            <div className="members-btn flex justify-between">
                <button className="mbtn1">Sign in</button>
                <button className="mbtn2">Become a member</button>
            </div>

            <section className="groc-container">
                <div>
                    <div>
                        <p className="grocery-top">Restaurants</p>
                    </div>
                    <div>
                         <p className="big-p">RESTAURANTS</p>
                 <div className="flex">
                        <div className="grocery-side">
                            <p>Breakfast</p>
                            <p>Lunch</p>
                            <p>Dinner</p>
                            <p>Fast food</p>
                        </div>
                        
                        <div>
                     <div className="flex justify-between">
                        <div className="asort flex justify-between">
                                <p>Sort By</p>
                                <p>Discount</p>
                                <p>Price Range</p>
                            </div>
                            <div>
                                <p>9 items displayed</p>
                            </div>
                     </div >
                        <div className="Groc-pic flex justify-between">
                        <div>
                        <img src={rs1} alt="food" />
                        <div className="flex justify-between"><p>Beef Burger</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    
               
                    <div>
                        <img src={bk2} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={bk3} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={bk4} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div className = "bk5">
                        <img src={bk5} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={bk6} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={bk7} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={bk8} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={bk9} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                        </div>
                        </div>
                  </div>
                    </div>
                </div>
            </section>
            <div>
            </div>
        </div>
        <div>               
            <p className="groc-bottom">People are currently looking at these </p>
            <div className="Groc-pic2 flex justify-between">
            <div>
                        <img src={rs1} alt="food" />
                        <div className="flex justify-between"><p>Beef Burger</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    
               
                    <div>
                        <img src={bk2} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={bk3} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
            </div>
        </div>

            <Footer />
        </div>
    )
}

export default Restaurants;