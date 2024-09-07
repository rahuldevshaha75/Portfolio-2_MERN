import React from 'react';
import {FaGithub, FaYoutube} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {IoLogoInstagram} from "react-icons/io";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="fullFooter">
            <footer>
                <div className="container" id="footer">
                    <div className="footerContainer">

                        <div className="footerNav">
                            <p><Link className="nav-link" to="home">Home</Link></p>
                            <p><Link className="nav-link" to="about">About</Link></p>
                            <p><Link className="nav-link" to="education">Education</Link></p>
                            <p><Link className="nav-link" to="teckstack">Tech Stack</Link></p>
                            <p><Link className="nav-link" to="experience">Experience</Link></p>
                            <p><Link className="nav-link" to="testimonial">Testimonial</Link></p>
                            <p><Link className="nav-link" to="contact">Contact</Link></p>

                        </div>
                        <div className="footerMedias">
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/in/rahul-dev-shaha">
                                    <div className="footerMedia"><FaLinkedin/></div>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.facebook.com/rdevshaha/">
                                   <div className="footerMedia"> <FaFacebook /></div>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.instagram.com/rahuldevshaha">
                                    <div className="footerMedia"><IoLogoInstagram /></div>
                                </a>
                            </div>
                                <a target="_blank" href="https://x.com/rahuldevshaha">
                                    <div className="footerMedia"><FaTwitter/> </div>
                                </a>
                            <div>
                                <a target="_blank" href="https://github.com/rahuldevshaha75">
                                    <div className="footerMedia"><FaGithub/></div>
                                </a>
                            </div>
                        </div>
                        <span>Copyright rahuldevshaha ©2024 All rights reserved </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;