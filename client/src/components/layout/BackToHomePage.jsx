import React from 'react';
import {Link} from "react-router-dom";

const BackToHomePage = () => {
    return (
        <div>
            <Link to={`/`}><button className="btn btn-dark mt-lg-5 mb-lg-5">Go Back to Home Page!!</button></Link>
        </div>
    );
};

export default BackToHomePage;