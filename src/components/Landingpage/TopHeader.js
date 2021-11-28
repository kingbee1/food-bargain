import React from 'react'
import { Link } from 'react-router-dom';


export default function TopHeader() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={require('../../images/logo.png').default} alt="logo" />
        </div>
        <div className="searchbar">
          <input type="text" name="search" placeholder="Search food stuff" />
          <button>
            <img src={require('../../images/search.png').default} alt="#" />
          </button>
        </div>

        <div className="menu-items">
          <div className="item">
            <img src={require('../../images/profile.png').default} alt="#" />
            <Link to="/">Account</Link>
            <img src={require('../../images/caret-down.png').default} alt="#" />
          </div>
          <div className="item">
            <img src={require('../../images/cart.png').default} alt="#" />
            <Link to="/">Cart</Link>
          </div>
        </div>

      </div>
      <div className="secondary-links">
        <Link to="/groceries">Groceries</Link>
        <Link to="/">Pastries</Link>
        <Link to="/">Restaurants</Link>
      </div>
    </>
  )
}
