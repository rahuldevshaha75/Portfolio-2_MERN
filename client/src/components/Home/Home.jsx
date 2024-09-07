import React from 'react';
import "../TypeWritter/TypeWritter.jsx";
import resume from '../../../public/file/AtomicHabit.pdf'
import {useTheme} from "../StateManage/LightDark.jsx";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import {Link} from "react-scroll";


const Home = () => {
    const[theme, setTheme]=useTheme()
    const handleTheme=()=>{
        setTheme((prevState)=>(prevState==="light"?"dark":"light"))
    }
    return (
        <>
            <div className="container-fluid home-container" id="home">
                <div onClick={handleTheme} className="theme-btn">
                    {
                        theme==='light'?(<BsFillMoonStarsFill size="20px"/>):(<MdSunny size="20px"/>)
                    }
                </div>
                <div className="container home-content">
                    <Fade right>
                    <h2>Hello, I'm Rahul.</h2>
                    <h1>
                        <Typewriter className="typeWritter"
                            options={{
                                strings: [
                                    "FullStack Developer!",
                                    "Mern Stack Developer!",
                                    "React native developer!",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h1>
                    </Fade>
                    <Fade bottom>
                        <div className="home-buttons">
                            <Link className="btn btn-hire"
                               to="contact"
                            >Hire Me</Link>
                            <a className="btn btn-cv" href={resume} download="Rahul.pdf">My Resume</a>
                        </div>

                        {/*<div className="container homeImg">*/}
                        {/*    <div className="style-0">*/}
                        {/*        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt=""/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Fade>
                </div>

            </div>
        </>
    );
};

export default Home;