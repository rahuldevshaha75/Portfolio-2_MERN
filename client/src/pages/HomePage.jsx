import React from 'react';
import '../assets/css/HomePage.css'
import MobileNav from "../components/Mobile Nav/MobileNav.jsx";
import Layout from "../components/layout/layout.jsx";
import BlogPage from "./BlogPage.jsx";
import ContactPage from "./ContactPage.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import {useTheme} from "../components/StateManage/LightDark.jsx";
import AboutPage from "./AboutPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";


const HomePage = () => {
    const [theme]=useTheme()
    return (
        <>
            <div id={theme}>
                <div>
                    <MobileNav/>
                    <Layout/>
                    <AboutPage/>
                    <BlogPage/>
                    <ProjectsPage/>
                    <ContactPage/>
                </div>
                <Footer/>
            </div>
            <ScrollToTop/>

        </>
    )
        ;
};

export default HomePage;