import React , { useState } from 'react'
import Footer from '../components/Landingpage/Footer'
import gr1 from '../images/gr1.png'
import gr2 from '../images/gr2.png'
import gr3 from '../images/gr3.png'
import gr4 from '../images/gr4.png'
import gr5 from '../images/gr5.png'
import gr6 from '../images/oil.png'
import gr7 from '../images/flour.png'
import gr8 from '../images/minimie.png'
import gr9 from '../images/wine.png'
import Hero from '../components/Hero'
import TopHeader from '../components/Landingpage/TopHeader'
import '../styles/landing.css';


     const Groceries = () => {
    return (
        <div>
        <TopHeader />
        <div className="flex justify-between top-groceries">
            <p>Home </p>
            <p> > </p>
            <p>Groceries</p>
        </div>
        <div className="members">
            <Hero />

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
                        <img src={gr1} alt="food" />
                        <div className="flex justify-between">
                        <p>Ban Fry Noodles</p> </div>
                        <div className="flex justify-between">
                            <p className="span">NGN 2,500</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                        </div>

                            


                    </div>   
            
                    <div>
                        <img src={gr2} alt="food" />
                        <div className="flex justify-between"><p>Oreos</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr3} alt="food" />
                        <div className="flex justify-between"><p>Onions</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr4} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div className = "gr5">
                        <img src={gr5} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr6} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr7} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr8} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr9} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> </div>
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
                        <img src={gr1} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
                    
               
                    <div>
                        <img src={gr2} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>

                    <div>
                        <img src={gr3} alt="food" />
                        <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
                        <p>N 5,400 &emsp;<span className="span">NGN 2,500</span></p>
                    </div>
        </div>
        </div> 
        <Footer />
        </div>
    );
}

export default Groceries;