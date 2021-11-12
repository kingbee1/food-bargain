import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="error">
        <p>Not found, xri</p>
        <Link to="/">Return to FOodBargains</Link>

        </div>
    )
}

export default NotFound;