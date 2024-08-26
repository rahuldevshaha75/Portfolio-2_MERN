import React from 'react';
import { FaLinkedin,FaFacebook,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
const Contact = () => {
    return (
        <>
            <div className="container contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <LightSpeed>
                                    <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnOnOVPzbsemkgOVe8aJuDXqhO7Nn2_PBfw&s" alt="Contact"/>
                                    </LightSpeed>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <Rotate>
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>Contact With
                                            <FaLinkedin color="#0077B5" size="30px" className="ms-2"/>
                                            <FaGithub color="" size="30px" className="ms-2"/>
                                            <FaFacebook color="blue" size="30px" className="ms-2"/>
                                            <FaYoutube color="red" size="30px" className="ms-2"/>

                                        </h6>


                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line"/>
                                        <small className="or text-center">OR</small>
                                        <div className="line"/>
                                    </div>
                                    <div className="row px-3">
                                        <input className="mb-3" type="text" name="name" placeholder="Enter Your Name"/>
                                    </div>
                                    <div className="row px-3">
                                        <input className="mb-3" type="email" name="email"
                                               placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="row px-3">
                                        <textarea className="mb-3" type="text" name="msg"
                                                  placeholder="Enter Your Opinion"/>
                                    </div>
                                    <div className="row px-3">
                                        <button className="btn btn-success baton" type="Submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;