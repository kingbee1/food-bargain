import React from 'react';
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

const Nav = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="new-nav">
                        <Link to="/"><img src={logo} alt=""/></Link>
                </div>
                <div className="new-search-form"> 
                    <FiSearch className="new-search-icon"/>
                    <input className="new-search-bar" type="text" placeholder="Search food stuff"/>
                </div>
                <div className="flex justify-between">
                    <p>Account</p>
                    <p>cart</p>
                </div>
                    
            </div>
            
        </div>
    )
}

export default Nav;