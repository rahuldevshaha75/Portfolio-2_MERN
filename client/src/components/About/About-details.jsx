import React from 'react';
import Education from "../Education/Education.jsx";
import TechStack from "../TechStack/TechStack.jsx";
import Experience from "../Experience/Experience.jsx";
import Layout from "../layout/layout.jsx";
import Footer from "../layout/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import BackToHomePage from "../layout/BackToHomePage.jsx";

const AboutDetails = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                        <BackToHomePage/>
                    </div>
                </div>
            </div>

            <TechStack/>
            <Education/>
            <Experience/>


            <div>
                <div className="container">
                    <div className="row">
                        <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                            <BackToHomePage/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </div>

    );
};

export default AboutDetails;