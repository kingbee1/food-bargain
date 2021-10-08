import React from 'react'
import flogo from '../../images/f.png';
import ologo from '../../images/o.png';
import oologo from '../../images/oo.png';
import dlogo from '../../images/d.png';
import { FiSearch } from "react-icons/fi";
import bbargain from '../../images/b.png';
import abargain from '../../images/a.png';
import rbargain from '../../images/r.png';
import gbargain from '../../images/g.png';
import aabargain from '../../images/aa.png';
import ibargain from '../../images/i.png';
import nbargain from '../../images/n.png';
import dot from '../../images/dot.png';




const Navbar = () => {
    return (
        <div>
            <h1 className="top">Get a free snack & exclusive reward when you sign up</h1>
            <nav className="logo">
                <img src={flogo} alt=""/>
                <img src={ologo} alt=""/>
                <img src={oologo} className="oologo" alt=""/>
                <img src={dlogo} alt=""/>
                <div className="dot">
                    <img src={dot} alt=""/>
                </div>
            <div className="logo-2">
                <img src={bbargain} className="bbargain" alt=""/>
                <img src={abargain} alt=""/>
                <img src={rbargain} alt=""/>
                <img src={gbargain} alt=""/>
                <img src={aabargain} alt=""/>
                <img src={ibargain} alt=""/>
                <img src={nbargain} alt=""/>
            </div>
                <form className="search">
                    <div className="search-form"> 
                        <FiSearch />
                        <input className="search-bar" type="text" placeholder="Search food stuff"/>
                    </div>
                </form>
            <ul className="cart">
                <li>Login</li>
                <li>Shopping Cart (0)</li>
            </ul>
            </nav>
        </div>
       
        
        
    )
};

export default Navbar;