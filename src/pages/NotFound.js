import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from '../components/Landingpage/TopHeader';

const NotFound = () => {
    return (
        <div>
            <TopHeader />
            <div className="error">
                <div className="error-content">
                    <p className="fat-p">404</p>
                    <p>Wrong Place, sorry</p>
                    <p>The page you're searching for is not here</p>
                    <Link to="/"><button className="error-btn">Return Home...</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;