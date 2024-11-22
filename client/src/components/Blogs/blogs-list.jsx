import React from 'react';
import RubberBand from "react-reveal/RubberBand.js";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade.js";
import BackToHomePage from "../layout/BackToHomePage.jsx";
import ScrollToTop from "react-scroll-to-top";


const BlogList = () => (
    <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                        <h1>Welcome TO RAHUL's Blogs</h1>
                        <Link to={`/`}>
                            <button className="btn btn-dark mt-lg-2 mb-lg-5">Go Back to Home Page!!</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        <div>

            <div className="container project" id="projects">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center">TOP RECENT BLOGS</h2>
                </RubberBand>
                <p className="pb-3 text-center">
                    Here are my top 3 recent project with live links source code.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda atque commodi
                    consectetur esse et, ex hic illo, itaque iusto obcaecati perferendis placeat praesentium quidem
                    quo, soluta velit? Ad dolores eveniet iusto magnam necessitatibus nemo nesciunt nisi non quod
                    veritatis! Aliquid consequuntur libero nihil odit quod, sunt ullam vel!
                </p>
                {/*Card design*/}
                <div className="container">
                    <div className="row" id="ads">
                        <Fade bottom>
                            <div className="col-md-4">
                                <div className="card rounded crd mb-lg-5 mt-lg-5">
                                    <div className="card-image">
                                        {/*<span className="project-category">Full Stack </span>*/}
                                        <img className="project-imG"
                                             src="../../../public/image/Blog/2.avif"
                                             alt="Project 1"/>
                                    </div>
                                    <div className="card-image-overly m-auto mt-3 tech-detailS">
                                        <div>Category:</div>
                                        <span className="card-detail-badge">Web Devlopment</span>

                                    </div>
                                    <div className="card-body text-center">
                                        <div className="ad-title m-auto">
                                            <h5 className="text-uppercase">
                                                How to be a Skilled Developer in 2024
                                            </h5>
                                        </div>
                                        <button className="btn btn-dark m-lg-1">Read</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded crd mb-lg-5 mt-lg-5">
                                    <div className="card-image">
                                        {/*<span className="project-category">Full Stack </span>*/}
                                        <img className="project-imG"
                                             src="../../../public/image/Blog/2.avif" alt="Project 1"/>
                                    </div>
                                    <div className="card-image-overly m-auto mt-3 tech-detailS">
                                        <div>Category:</div>
                                        <span className="card-detail-badge">Web Devlopment</span>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="ad-title m-auto">
                                            <h5 className="text-uppercase">
                                                How to be a Skilled Developer in 2024
                                            </h5>
                                        </div>
                                        <button className="btn btn-dark m-lg-1">Read</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded crd mb-lg-5 mt-lg-5">
                                    <div className="card-image">
                                        {/*<span className="project-category">Full Stack </span>*/}
                                        <img className="project-imG"
                                             src="../../../public/image/Blog/2.avif"
                                             alt="Project 1"/>
                                    </div>
                                    <div className="card-image-overly m-auto mt-3 tech-detailS">
                                        <div>Category:</div>
                                        <span className="card-detail-badge">Web Devlopment</span>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="ad-title m-auto">
                                            <h5 className="text-uppercase">
                                                How to be a Skilled Developer in 2024
                                            </h5>
                                        </div>
                                        <button className="btn btn-dark m-lg-1">Read</button>

                                    </div>
                                </div>
                            </div>

                        </Fade>

                    </div>

                </div>
            </div>
        </div>


        <div>
            <div className="container mt-lg-5">
                <div className="row">
                    <div className="card mt-lg-5 align-items-center pt-lg-5 bg-body-secondary">
                        <BackToHomePage/>
                    </div>
                </div>
            </div>
        </div>
        <ScrollToTop/>

    </>
);

export default BlogList;
