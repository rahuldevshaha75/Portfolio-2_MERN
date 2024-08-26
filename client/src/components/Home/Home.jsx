import React from 'react';
import "../TypeWritter/TypeWritter.jsx";
import TypeWritterEff from "../TypeWritter/TypeWritter.jsx";
import resume from '../../../public/file/AtomicHabit.pdf'
import {useTheme} from "../StateManage/LightDark.jsx";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import Fade from "react-reveal/Fade";
import {TypeWritter} from "typewritter";
import Typewriter from "typewriter-effect";

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
                    <h2>I am RAHUL DEV SHAHA</h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: [
                                    "FullStack Developer!",
                                    "Mern Stack Developer!",
                                    "React native developer!",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />                   </h1>
                    </Fade>
                    <Fade bottom>
                    <div className="home-buttons">
                        <a className="btn btn-hire"
                        href="https://api.whatapps.com/send?phone=01790364075"
                        rel="noreferrer"
                        target ="_blank">Hire Me</a>
                        <a className="btn btn-cv" href={resume} download="Rahul.pdf">My Resume</a>
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default Home;