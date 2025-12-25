import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Home from "./Home/home";
import About from "./About/about";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Join from "./Join/join";
import Donate from "../DonateForm/donateform";
import Login from "../LoginForm/loginform";

const LandingPageLayout = () => (
  <div className="Landing">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/join" element={<Join />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default LandingPageLayout;
