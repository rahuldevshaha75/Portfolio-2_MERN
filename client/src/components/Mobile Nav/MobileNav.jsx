import React, {useState} from 'react';
import {MdMenu, MdWorkspacePremium} from "react-icons/md";
import {Link} from "react-scroll";
import {FcAbout, FcBusinessContact, FcEditImage, FcGraduationCap, FcHome, FcSettings, FcTemplate} from "react-icons/fc";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
const MobileNav = () => {


    const [open, setOpen]=useState(false)

    //handle open
    const handleOpen=()=>{
        setOpen(!open);
    }

    //handle menu Click
    const handleMenuClick=()=>{
        setOpen(false)
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {
                        open?(<AiOutlineMenuFold onClick={handleOpen} size={25} className="mobile-nav-icon"/>):(<AiOutlineMenuUnfold onClick={handleOpen} size={25} className="mobile-nav-icon"/>)
                    }

                    <span className="mobile-nav-title">MY portfolio</span>
                </div>
                {
                   open && (<div className="mobile-nav-menu">
                        <div>
                            <div className="mobile-nav-items">
                                <div className="mobile-nav-item">
                                    <div className="mobile-nav-link">
                                        <Link to="home"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcHome/>
                                            Home
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="about"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcAbout/>
                                            About

                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="education"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcGraduationCap/>
                                            Education
                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="techstack"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcSettings/>
                                            Tech Stack

                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="projects"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcEditImage/>
                                            Projects

                                        </Link>
                                    </div>
                                    <div className="nav-link">
                                        <Link to="experience"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <MdWorkspacePremium/>
                                            Experience

                                        </Link>
                                    </div>

                                    <div className="nav-link">
                                        <Link to="testimonials"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>

                                            <FcTemplate/>
                                            Testimonial
                                        </Link>

                                    </div>
                                    <div className="nav-link">
                                        <Link to="contact"
                                              spy={true}
                                              smooth={true}
                                              offset={-100}
                                              duration={100}
                                              onClick={handleMenuClick}>
                                            <FcBusinessContact title="contact"/>
                                            Contact
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </>
    );
};

export default MobileNav;