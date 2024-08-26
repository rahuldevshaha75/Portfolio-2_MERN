import React from 'react';
import { FcHome,FcAbout,FcSettings,FcGraduationCap,FcEditImage,FcCustomerSupport,FcTemplate,FcBusinessContact  } from "react-icons/fc";
import { MdWorkspacePremium } from "react-icons/md";
import {Link} from "react-scroll";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Menu = ({Toggle}) => {
    return (
        <>{
            Toggle? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img
                                src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg"
                                alt="Profile Pic"/>
                        </div>
                    </Zoom>
                    <Fade left>
                    <div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>

                                        <FcHome/>
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="about"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>
                                        <FcAbout/>
                                        About

                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>

                                        <FcGraduationCap/>
                                        Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techstack"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>
                                        <FcSettings/>
                                        Tech Stack

                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="projects"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>
                                        <FcEditImage/>
                                        Projects

                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="experience"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>
                                        <MdWorkspacePremium/>
                                        Experience

                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link to="testimonials"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>

                                        <FcTemplate/>
                                        Testimonial
                                    </Link>

                                </div>
                                <div className="nav-link">
                                    <Link to="contact"
                                          spy={true}
                                          smooth={true}
                                          offset={-100}
                                          duration={100}>
                                        <FcBusinessContact title="contact"/>
                                        Contact
                                    </Link>
                                </div>

                            </div>
                        </div>
                     </div>
                    </Fade>
                </>
            ) : (<>
                <div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to="home"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <FcHome/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="about"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <FcAbout/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="education"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>

                                    <FcGraduationCap/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="techstack"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <FcSettings/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="projects"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <FcEditImage/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link to="experience"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <MdWorkspacePremium/>
                                </Link>
                            </div>
                            <div className="nav-link">
                                <FcTemplate title="Testimonial"/>
                            </div>
                            <div className="nav-link">
                                <Link to="contact"
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={100}>
                                    <FcBusinessContact title="contact"/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </>)
        }

        </>
    );
};

export default Menu;