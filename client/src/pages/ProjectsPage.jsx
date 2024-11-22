import React from 'react';
import RubberBand from "react-reveal/RubberBand.js";
import {Link} from "react-router-dom";

const ProjectsPage = () => {
    return (
        <>
            <div className='Main-Project' id="projects">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center heaD">Projects</h2>

                    <p className="pb-3 text-center"></p>
                </RubberBand>
                <section className="articles">
                    <article>
                        <div className="article-wrapper">
                            <figure>
                                <img src="./.././../../public/image/projects/3.jpg" alt=""/>
                            </figure>
                            <div className="article-body">
                                <h2>Projects </h2>
                                <p>
                                    👉Projects are opportunities to turn imagination into knowledge and dreams into
                                    reality." – Albert Einstein!!
                                </p>

                                <Link to={`project-list`}>
                                    <button className="btn btn-outline-success blog-btN"> Let's Explore</button>
                                </Link>

                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
};

export default ProjectsPage;