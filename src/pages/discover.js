import React, { useState } from "react";
import DiscoverSection from "../components/discoverSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Footer from "../components/footer";

export const Discover = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <DiscoverSection />
        <Footer/>
    </>
    );
}