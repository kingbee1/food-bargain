import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
//import { CgShoppingCart } from "react-icons/cg";
import { RiShoppingCartLine } from "react-icons/ri";


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
                <li>Log in</li>
                <RiShoppingCartLine className="cart-icon" />
                <li>Shopping Cart (0)</li>
            </ul>
            
            </nav>
        </div>
               
        
    )
};

export default Navbar;