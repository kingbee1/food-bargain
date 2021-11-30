import React from 'react'
import TopHeader from '../components/Landingpage/TopHeader'
import Footer from '../components/Landingpage/Footer'
import { Link } from 'react-router-dom'
import bk1 from '../images/bk1.png'
import bk2 from '../images/bk2.png'
import bk3 from '../images/bk3.png'
import bk4 from '../images/bk4.png'
import bk5 from '../images/bk5.png'
import bk6 from '../images/bk6.png'
import bk7 from '../images/bk7.png'
import bk8 from '../images/bk8.png'
import bk9 from '../images/bk9.png'
import Hero from '../components/Hero'



const Pastries = () => {
    return (
        
        <div>
            <TopHeader />
                <div className="flex justify-between top-bakery">
            <Link to="/"><p>Home </p></Link>
            <p> > </p>
            <p>Pastries</p>
            <p> > </p>
            <p> Bread </p>
            </div>
            <div className="members">
                <Hero />
                <section className="groc-container">
                    <div>
                        <div>
                            <p className="grocery-top">Bakery</p>
                        </div>
                        <div>
                            <p className="big-p">BAKERY</p>
                    <div className="flex">
                            <div className="grocery-side">
                                <p>Bread</p>
                                <p>Pastries</p>
                                <p>Cake</p>
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
                            <img src={bk1} alt="food" />
                            <div className="flex justify-between"><p>Banana Bread</p> <p>-16</p></div>
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
                            <img src={bk1} alt="food" />
                            <div className="flex justify-between"><p>Stir Fry Noodles</p> <p>-16</p></div>
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

export default Pastries;