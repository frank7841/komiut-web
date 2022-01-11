import React, {useState} from 'react';
import Image1 from "../../images/svg-1.svg";
import Image2 from "../../images/svg-2.svg";
import InfoSection from "../../components/infoSection";
import InfoSectionLight from "../../components/infoSectionLight";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import Footer from "../../components/footer";

export const Percel=()=> {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />  
      <InfoSection
        image={Image1}
        id="percel"
        subtitle="Easy Percel management"
        title="Percel App"
        text="Our Percel reconciliation  application makes sending and receiving percel processes easy..... "
        btnText= "get started"
      />
      <InfoSectionLight
        image={Image2}
        id="queue-security"
        subtitle="                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
        title="100% automated"
        text="easy to use"
        btnText="Explore"
      />
      <Footer/>
     
    </>
  );
}

