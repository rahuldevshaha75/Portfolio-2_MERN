import React from 'react';

import BackToHomePage from "./BackToHomePage.jsx";

const NoData = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                        <h1>Error 404</h1>
                        <BackToHomePage/>
                    </div>
                </div>
           </div>
        </>
    );
};

export default NoData;