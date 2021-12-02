//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Landingpage/Footer';
import Navbar from '../components/Landingpage/Navbar';
import TopHeader from '../components/Landingpage/TopHeader';
import Content from '../components/Landingpage/Content';
import '../styles/landing.css';
import { useState } from 'react';

//const [style, setStyle] = useState({display: 'none'});

const Home = () => {
    return (
        <div className="home-container">
            <TopHeader />
            <div className="secondary-links">
                <Link to="/groceries">Groceries</Link>
                <Link to="/pastries">Pastries</Link>
                <Link to="/restaurants">Restaurants</Link>
            </div>
            <div className="content">
                <div className="banner">
                    <div className="banner-content">
                        <div className="data">
                            <div className="title">Eat <span>more</span></div>
                            <div className="title">Spend <span>less</span> </div>
                            <div className="subtitle">Get <b>discounted fresh food</b> from your favourite restaurants and grocery stores before they go bad.  </div>
                            <button>Get Started</button>
                        </div>
                        <div className="banner-image">
                            <img src={require('../images/banner-image.png').default} alt="banner image" />
                            <div className="stat top-left"> -30%</div>
                            <div className="stat2"> -70%</div>
                        </div>
                    </div>
                </div>
                <section className="top-restaurants">
                    <h2 className="section-title">Top Restaurants</h2>
                    <div className="restaurants">
                        <Link to="/https://www.chicken-republic.com/" className="restaurant">
                            <img src={require('../images/crep.png').default} alt="" />
                        </Link>
                        <Link to="/https://www.dominos.ng/" className="restaurant">
                            <img src={require('../images/dominos.png').default} alt="" />
                        </Link>
                        <Link to="/" className="restaurant">
                            <img src={require('../images/unclebens.png').default} alt="" />
                        </Link>
                        <Link to="/" className="restaurant">
                            <img src={require('../images/sfchicken.png').default} alt="" />
                        </Link>
                        <Link to="/" className="restaurant">
                            <img src={require('../images/theplace.png').default} alt="" />
                        </Link>
                        {/* <Link to="/" className="restaurant">
                            <img src={require('../images/mamacass.png').default} alt="" />
                        </Link> */}
                    </div>
                </section>

                <section className="top-cards">
                    <h2 className="section-title">Take a look at these</h2>
                    <div className="item-cards">
                        <Link to="/" className="item-card">
                            <img src={require('../images/stirfry.png').default} alt="stir fry" />
                        </Link>
                        
                        <Link to="/" className="item-card">
                            <img src={require('../images/Vegitable soup.png').default} alt="efo" />
                        </Link>
                        <Link to="/" className="item-card">
                            <img src={require('../images/j rice 1.png').default} alt="jollof rice" />
                        </Link>
                        <Link to="/" className="item-card">
                            <img src={require('../images/rchicken.png').default} alt="roasted chicken" />
                        </Link>
                        <Link to="/" className="item-card">
                            <img src={require('../images/Asun.png').default} alt="asun" />
                        </Link>
                    </div>
                </section>
                
                <section className="flex justify-between">
                    <div>
                        <img src={require('../images/babyfood.png').default} alt="big baby" />
                    </div>
                    <div className="reward2">
                        <p className="r2">Members get <span className="p-green">exclusive</span> rewards</p>
                        <p className="r3">Become a member and get even more food for less.</p>
                        <Link to="/signup"><button className="btn">Sign up Now</button></Link>
                    </div>
                </section>


                <div className="carou">
                    <p className="title"> Oops! You just missed it</p>
                    <div className="carous flex justify-between">
                        <div className="carous-card">                           
                            <img src={require ('../../src/images/banana.png').default} alt="food" />  
                            <div className="card-wrap">                       
                                <p className="carous-p1">Bananas(1 Bunch)</p>
                                <p className="carous-green">NGN 600</p>
                                <div className="flex justify-between">
                                <p className="span">NGN 2,500</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="carous-card">
                            <img src={require('../../src/images/cornflakes.png').default} alt="cornflakes" />
                            <div className="card-wrap">
                                <p className="carous-p1">Nasco CornFlakes(350g)</p>
                                <p className="carous-green">NGN  1,450</p>
                                <div className="flex justify-between">
                                <p className="span">NGN 1,240</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="carous-card">
                            <img src={require('../../src/images/oreos.png').default} alt="oreos" />
                            <div className="card-wrap">
                                <p className="carous-p1">Oreos Cookies</p>
                                <p className="carous-green">NGN 1,150</p>
                                <div className="flex justify-between">
                                    <p className="span">NGN 950</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="carous-card">
                            <img src={require('../../src/images/wine.png').default} alt="wine" />
                            <div className="card-wrap">
                                <p className="carous-p1">Pure Haven Wine</p>
                                <p className="carous-green">NGN 5,450</p>
                                <div className="flex justify-between">
                                <p className="span">NGN 2,800</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="carous-card">
                            <img src={require('../../src/images/semo.png').default} alt="semo" />
                            <div className="card-wrap">
                                <p className="carous-p1">Golden Penny Semovita</p>
                                <p className="carous-green">NGN 1,299</p>
                                <div className="flex justify-between">
                                <p className="span">NGN 650</p> <div className="h-span"><p className="h-span-p">-44%</p></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 

                <div className="blog flex justify-between">
                    <div>
                        <p className="blog1">Food Bargains <span className="p-green">blog</span></p>
                        <p className="blog2">Specially curated and relevant stories on food waste management and its environmental impacts to keep you quite as committed as we are to the fight against food waste. </p>
                        <p className="blog3 p-green">Check it out >>> </p>
                    </div>
                    <div>
                        <div className="test"></div>
                        <div className="test2"></div>
                        <div className="blog-right">
                        <img src={require('../../src/images/babyfood.png').default} alt="wine" />  
                        <p className="right1">Saving the world, ojjne meal at a time</p>
                    </div>
                    </div>
                </div>  

                <div className="base-container">
                    <p className="fight">Look what our food fighters have to say</p>
                    <div className="flex justify-between">
                        <div className="fight1">
                            <img src={require('../images/fight1.png').default} alt="stir fry" />
                            <p className="fight-p">“Food Bargains literally has the best food deals!”</p>
                            <p className="center">Suso</p>
                        </div>
                        <div className="fight2">
                            <img src={require('../images/fight1.png').default} alt="stir fry" />
                            <p className="fight-p">“Offering quality food for less is a super hero act.”</p>
                            <p className="center">Suso</p>
                        </div>
                        <div className="fight3">
                            <img src={require('../images/fight1.png').default} alt="stir fry" />
                            <p className="fight-p">“Dining at a restaurant on a budget is unmatched!”</p>
                            <p className="center">Suso</p>
                        </div>
                        <div className="fight4">
                            <img src={require('../images/fight1.png').default} alt="stir fry" />
                            <p className="fight-p">“Food from my business all gets sold out now.”</p>
                            <p className="center">Suso</p>
                        </div>
                    </div>
                </div>
                


                <div className="community">
                <p className="community-p">Join our community</p>
                <p className="community-p2">Sign up to be the first to get exclusive deals, personalised offers and knowledge you need to successfully manage food waste and save the environment.</p>
                <div className="join flex justify-between">
                    <input className="join-search" type="text" placeholder="Enter your email address" />
                    <button className="join-btn">Subscribe</button>
                </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Home;