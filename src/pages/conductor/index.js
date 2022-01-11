import React, {useState} from 'react';
import Image1 from "../../images/svg-1.svg";
import Image2 from "../../images/svg-2.svg";
import InfoSection from "../../components/infoSection";
import InfoSectionLight from "../../components/infoSectionLight";
import { Navbar } from "../../components/navbar";
import { Sidebar } from "../../components/sidebar";
import Footer from "../../components/footer";

export const Conductor=()=> {
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
        id="conductor"
        subtitle="Enjoy Cashless Payment"
        title="Cashlight App"
        text="Conductors uses our Point Of Sale application to issue receipts for payments made by passengers via M-Pesa or Cash and the app generates appropriate reports for managers"
        btnText= "get started"
      />
      <InfoSectionLight
        image={Image2}
        id="Conductor-security"
        subtitle="                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
        title="24/7 Secured"
        text="money security"
        btnText="Explore"
      />
      <Footer/>
     
    </>
  );
}

