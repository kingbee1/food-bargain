import React from 'react';
import Footer from '../components/Landingpage/Footer';
import Navbar from '../components/Landingpage/Navbar';


const Usersignup = () => {
    return (
        <div>
            <Navbar />
            <div className="signup">
                <p className="top-signup">Create an account</p>
                <p className="small-top">Let’s get you set up so you can begin to enjoy food bargains </p>
            <div className="form">
                <form className="form1 flex justify-between">
                    <label for=""></label>
                    <input type="text"  name="fname" value="First name" />
                    <label for=""></label>
                    <input type="text"  name="lname" value="Last name" />
                </form>
                <form className="flex justify-between">
                    <label for=""></label>
                    <input type="email"  name="fname" value="Email address" />
                    <label for=""></label>
                    <input type="text"  name="lname" value="Phone number" />
                </form>
                <form className="flex flex justify-between">
                    <label for=""></label>
                    <input type="text"  name="fname" value="Password" />
                    <label for=""></label>
                    <input type="text"  name="lname" value="Confirm Password" />
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