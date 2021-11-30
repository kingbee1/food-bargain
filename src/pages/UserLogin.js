import React from 'react'
import TopHeader from '../components/Landingpage/TopHeader';
import Footer from '../components/Landingpage/Footer';
import { FiMail } from 'react-icons/fi';
import { FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';


const UserLogin = () => {
    return(
        <div>
        <TopHeader />
        <div className="login-p">
            <p className="login-p1">Login</p>
            <p className="login-p2">Don’t have an account? <Link to="/signup"><span className="p-green">Create here</span></Link></p>
        </div>
        <div className="login-form justify-center">
            <form>
                <label for=""></label>
                <FiMail className="mail"/>
                <input type="text" placeholder="Email/Username" name="uname" required />
            </form>

            <form>
                <label for=""></label>
                <FiLock className="lock" />
                <input type="password" placeholder="Password" name="psw" required />
            </form>

            <form className="checking">
                <label>
                <input type="checkbox" name="remember" />
                Remember me <span className="psw">Forgot Password?</span>
                </label>
            </form>

            <div>
                <button className="l-btn">Login</button>
                <div className="line"></div>or<div className="line"></div>
                <button className= "l-btn2 qwe"> <FcGoogle /> Continue with Google</button>
            </div>

        </div> 
        
        <Footer />
        </div>  
    )
}

export default UserLogin;