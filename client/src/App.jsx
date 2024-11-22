import React from 'react';
import HomePage from "./pages/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoData from "./components/layout/No_Data.jsx";
import AboutDetails from "./components/About/About-details.jsx";
import BlogList from "./components/Blogs/blogs-list.jsx";
import ProjectList from "./components/Projects/Project-list.jsx";
import AdminLogin from "./components/admin/Dashboard/AdminLogin.jsx";

const App = () => {
  return (

    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="*" element={<NoData/>}/>
                <Route path="blog-list" element={<BlogList/>}/>
                <Route path="project-list" element={<ProjectList/>}/>
                <Route path="about-details" element={<AboutDetails/>}/>
                <Route path="admin-login" element={<AdminLogin/>}/>
            </Routes>
        </BrowserRouter>

    </>
  );
};

export default App;