import React, { useState } from "react";
import AboutSection from "../components/aboutSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Footer from "../components/footer";

export const About = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <AboutSection />
        <Footer/>
    </>
    );
}