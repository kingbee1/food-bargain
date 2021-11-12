import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';

import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
//import { CgShoppingCart } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";
import { createStore } from 'redux';
import Cart from '../../pages/CartList';


const Navbar = () => {
    return (
        <div>
            <nav className="logo">
            <Link to="/"><img src={logo} alt=""/></Link>

                <form className="search">
                    <div className="search-form"> 
                        <FiSearch className="search-icon"/>
                        <input className="search-bar" type="text" placeholder="Search food stuff"/>
                    </div>
                </form>
            <ul className="cart">
                <FaUserAlt className="cart-user"/>
                <Link to="/login"><li>Log in</li></Link>
                <RiShoppingCartLine className="cart-icon" />
                <Link to="/cart"><li>Shopping Cart(0)</li></Link>
            </ul>
            
            
            <div className="below-nav">
                <Link to="/groceries">Groceries </Link>
                <Link to="/bakery">Bakery </Link>
                <Link to="/restaurants">Restaurants </Link>
            </div>

            </nav>
        </div>
               
        
    )
};

export default Navbar;