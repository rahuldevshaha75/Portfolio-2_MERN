import React from 'react';
import BlogCard from "../components/Blogs/blogs-list.jsx";
import RubberBand from "react-reveal/RubberBand.js";
import {Link} from "react-router-dom";

const BlogPage = () => {
    return (
        <>
            <div className='Main-blog' id="blog">
                <RubberBand>
                    <h2 className="col-12 mt-3 mb-1 text-center heaD">Blogs</h2>
                    <p className="pb-3 text-center"></p>
                </RubberBand>
                <section className="articles">
                    <article>
                        <div className="article-wrapper">
                            <figure>
                                <img src="./.././../../public/image/Blog/1.avif" alt=""/>
                            </figure>
                            <div className="article-body">
                                <h2>BLOG </h2>
                                <p>
                                    👉 Blogging is not just about writing; it's about sharing knowledge that inspires
                                    others to think and grow!!
                                </p>

                                   <Link to={`blog-list`}><button className="btn btn-outline-success blog-btN"> Let's Explore</button></Link>

                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
};

export default BlogPage;