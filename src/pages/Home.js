import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Landingpage/Footer';
import Navbar from '../components/Landingpage/Navbar';
import TopHeader from '../components/Landingpage/TopHeader';
import Content from '../components/Landingpage/Content';
import '../styles/landing.css';


const Home = () => {
    return (
        <div className="home-container">
            <TopHeader />
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
                        <Link to="/" className="restaurant">
                            <img src={require('../images/mamacass.png').default} alt="" />
                        </Link>
                    </div>
                </section>

                <section className="top-cards">
                    <h2 className="section-title">Take a Look at these</h2>
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

            </div>
            <Footer />
        </div>
    )
}

export default Home;