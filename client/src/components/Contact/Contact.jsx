import React from 'react';
import { FaLinkedin,FaFacebook,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";

const Contact = () => {
    return (
        <div>
            <div className="contactMe" id="contact">
                <div className="contactOverlay">
                    <div className="container">
                        <div className="form">
                            <form action="" onSubmit="">
                                <div className="formImg">
                                    <img src="https://avisanco.ir/wp-content/uploads/2024/04/contact-us.png" alt="contact-image"/>
                                </div>
                                <div className="formWord">
                                    <h2>Say Hello!</h2>
                                    <div>Full Name</div>
                                    <br/>
                                    <input className="input100" type="text" name="fullName" required/>
                                    <br/>
                                    <span>Phone Number</span>
                                    <br/>
                                    <input className="input100" type="text" name="phone" required/>
                                    <br/>
                                    <span>Enter Email</span>
                                    <br/>
                                    <input className="input100" type="text" name="email" required/>
                                    <br/>
                                    <span>Message</span>
                                    <br/>
                                    <textarea name="message" required></textarea>
                                    <br/>
                                    <button>SUBMIT</button>

                                    <div className="row">{}</div>
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