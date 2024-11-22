import React from 'react';
import Jump from "react-reveal/Jump.js";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <Jump>
                <div className="about " id='about'>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            {/*<img src="../../public/image/aboutMe.jpg" alt="About Pic"/>*/}
                            <img src="../../public/image/rahulpic.jpg" alt="Rahul Pic"/>
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About Me</h1>
                            <p>A alias asperiores, assumenda at, delectusconsectetur deleniti quia quod repellendus reprehenderit saepe sed sequi similique tempora unde velit veniam veritatis voluptatum. Atque consectetur corporis dicta eaque eos modi praesentium provident ratione sequi similique. Deserunt dolor mollitia ut! Eaque molestias, nesciunt. Debitis deleniti dolor dolorum earum eligendi eum in incidunt non numquam officia, officiis perferendis placeat quaerat quam quas quisquam quod ratione recusandae reprehenderit rerum, saepe ullam velit vero voluptates voluptatum. Alias dolorem illum quis reiciendis sit! At, blanditiis cumque doloribus excepturi harum illum natus recusandae reprehenderit? Delectus dicta dolorum excepturi illo inventore non quaerat similique unde!</p>
                            <Link to={`/about-details`}>
                                <button className="btn btn-outline-secondary">
                                    Wanna Know More??
                                </button>
                            </Link>


                    </div>
                </div>
                </div>
            </Jump>
        </>
    );
};

export default AboutPage;