import React from 'react';
import Footer from '../../components/Landingpage/Footer';
import Navbar from '../../components/Landingpage/Navbar';
import Content from './Content';


const Home = () => {
    return (
        <div className="App">
        <div className="top">
            <h1 className="top-case">Get a free snack & exclusive rewards when you sign up</h1>
        </div>
        <Navbar />
        <Content />
        <Footer />
        </div>
    )
}

export default Home;