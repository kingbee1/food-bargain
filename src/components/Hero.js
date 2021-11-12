import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <p className="members-p">REGISTERED MEMBERS GET EXCLUSIVE REWARDS & FREEBIES</p>
            <div className="members-btn flex justify-between">
                <Link to="/login"><button className="mbtn1">Sign in</button></Link>
                <Link to="/signup"><button className="mbtn2">Become a member</button></Link>
            </div>
        </div>
    )
}

export default Hero;