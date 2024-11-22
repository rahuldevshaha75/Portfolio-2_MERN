import React from 'react';
import {Link} from "react-router-dom";

const AdminLogin = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                        <h1>This is ADMIN LOGIN Page</h1>
                        <Link to={`/`}>
                            <button className="btn btn-dark mt-lg-5 mb-lg-5">Go Back to Home Page!!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;