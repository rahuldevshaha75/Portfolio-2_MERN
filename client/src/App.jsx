import React from 'react';
import Layout from "./components/layout/layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TechStackPage from "./pages/TechStackPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import EducationPage from "./pages/EducationPagge.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/layout/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import {useTheme} from "./components/StateManage/LightDark.jsx";
import MobileNav from "./components/Mobile Nav/MobileNav.jsx";

const App = () => {
    const [theme]=useTheme()
  return (
    <>
        <div id={theme}>
           <div>
               <MobileNav/>
               <Layout/>
           </div>
        <div className="container">
            <AboutPage/>
            <EducationPage/>
            <TechStackPage/>
            <ProjectsPage/>
            <ExperiencePage/>
            <ContactPage/>
        </div>
        <Footer/>
        </div>
        <ScrollToTop/>

    </>
  );
};

export default App;