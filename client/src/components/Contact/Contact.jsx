import React from 'react';
import { FaLinkedin,FaFacebook,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import RubberBand from "react-reveal/RubberBand.js";

const Contact = () => {
    return (
        <div>
            <div className="contactMe" id="contact">
                <div className="contactOverlay">
                    <div className="container">
                        <RubberBand>
                            <h2 className="col-12 mt-3 mb-1 text-center contact-titlE">Say Hello!</h2>
                        </RubberBand>
                        <div className="form">
                        <form action="" onSubmit="">
                                <div className="formImg">
                                    <img src="../../../public/image/contact_Form/5.png" alt="contact-image"/>
                                </div>
                                <div className="formWord">
                                    <div>Full Name</div>
                                    <br/>
                                    <input className="input100" type="text" name="fullName" required placeholder="Full Name"/>
                                    <br/>
                                    <span>Phone Number</span>
                                    <br/>
                                    <input className="input100" type="text" name="phone" required placeholder="Phone Numnber"/>
                                    <br/>
                                    <span>Enter Email</span>
                                    <br/>
                                    <input className="input100" type="text" name="email" required placeholder="Enter Email"/>
                                    <br/>
                                    <span>Message</span>
                                    <br/>
                                    <textarea name="message" required placeholder="Write Something!!"></textarea>
                                    <br/>
                                    <button className="buttoN">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;