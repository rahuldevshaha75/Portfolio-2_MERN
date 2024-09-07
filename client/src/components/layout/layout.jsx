import React, {useState} from 'react';
import HomePage from "../../pages/HomePage.jsx";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import Menu from "../Menu/Menu.jsx";




const Layout = () => {
    let [Toggle,SetToggle]=useState(true)





//Change toggle:
    const handleToggle=()=>{
        SetToggle(!Toggle)
    }
    return (
        <>
            <div className="sidebar-section">
                <div className={Toggle?("sidebar-toggle sidebar"):("sidebar")}>
                    <div className="sidebar-toggle-icons">

                        <p onClick={handleToggle}>
                            {
                                Toggle?(<AiOutlineDoubleLeft size="25px"/>):(<AiOutlineDoubleRight size="25px"/>)
                            }

                        </p>
                    </div>
                    <Menu Toggle={Toggle} />
                </div>
                <div className="container">
                    <HomePage/>
                </div>
            </div>
        </>
    );
};

export default Layout;