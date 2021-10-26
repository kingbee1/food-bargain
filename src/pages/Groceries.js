import React from 'react'
import Navbar from '../components/Landingpage/Navbar'
import Footer from '../components/Landingpage/Footer'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'

const Groceries = () => {
    return (
        
        <div>
        <Navbar />
        <div className="flex justify-between top-groceries">
        <p>Home </p>
        <p> > </p>
        <p>Groceries</p>
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
                        <p className="grocery-top">Groceries</p>
                    </div>
                    <div>
                         <p className="big-p">GROCERIES</p>
                 <div className="flex">
                        <div className="grocery-side">
                            <p>Dairy</p>
                            <p>Cereals</p>
                            <p>Tinned Food</p>
                            <p>Confectionaries</p>
                            <p>Frozen Food</p>
                            <p>Eggs</p>
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
                        <img src={food4} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    
               
                    <div>
                        <img src={food3} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={food4} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    <div>
                        <img src={food3} alt="food" />
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
                <p className="groc-bottom">People are currently looking at these </p>
        <Footer />
        </div>
    )
}

export default Groceries;