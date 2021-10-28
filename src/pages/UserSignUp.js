import React from 'react';
import Footer from '../components/Landingpage/Footer';
import Navbar from '../components/Landingpage/Navbar';
import { useState } from 'react';


const Usersignup = () => {
    
    return (
        <div>
            <Navbar />
            <div className="signup">
                <p className="top-signup">Create an account</p>
                <p className="small-top">Let’s get you set up so you can begin to enjoy food bargains </p>
            <div className="form">
                <form className="form1 flex justify-between">
                    <label></label>
                    <input type="text" placeholder= "First name" />
                    <label for=""></label>
                    <input type="text" placeholder="Last name" />
                </form>
                <form className="flex justify-between">
                    <label for=""></label>
                    <input type="email" placeholder="Email address" />
                    <label for=""></label>
                    <input type="text" placeholder="Phone number" />
                </form>
                <form className="flex flex justify-between">
                    <label for=""></label>
                    <input type="text" placeholder="Password" />
                    <label for=""></label>
                    <input type="text" placeholder="Confirm Password" />
                </form>

            </div>
            <form className="checkbox justify-between">
                <input type="checkbox" name="" value="" />
                <label for=""> I have read and agreed to the <span className="p-green">terms and conditions</span></label>
            </form>
            
            <div className="signbtn">
                <button className=" btn">Create Account</button>
            </div>

            <p className="sign-p">Already have an account? <span className="p-green">Login</span></p>
        </div>
        <Footer />
      </div>
    )
}

export default Usersignup;