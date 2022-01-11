import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Products from "../components/products";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Join On our Journey"
        title="Who we are"
        text="Komiut is a leading technology partner in the matatu industry, having been established in 2017 it has more than 4 years of experience in the industry.
        Over the years Komiut has grown from one cashlite product to five products for the industry making it a one stop shop for the needs of all the matatu players.
        Below is a brief description of the products offered by Komiut.
        "
        btnText="Read More"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Customer Centered "
        title="Discover How we do it"
        text="Komiut is a leading technology partner in the matatu industry, having been established in 2017 it has more than 4 years of experience in the industry.
        Over the years Komiut has grown from one cashlite product to five products for the industry making it a one stop shop for the needs of all the matatu players.
        Below is a brief description of the products offered by Komiut.
        "
        btnText="Explore"
      />
      <Products />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Impact"
        title="What we offer to you "
        text="Komiut is a leading technology partner in the matatu industry, having been established in 2017 it has more than 4 years of experience in the industry.
        Over the years Komiut has grown from one cashlite product to five products for the industry making it a one stop shop for the needs of all the matatu players.
        Below is a brief description of the products offered by Komiut.
        "
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
