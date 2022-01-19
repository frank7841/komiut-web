import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./DiscoverElements";
import { ButtonR } from "../ButtonElements";
import back from "../../videos/bghd.png";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
      <VideoBg src={back} className="img-responsive"  >
        </VideoBg> 
      </HeroBg>
      <HeroContent>
        
        <p className="hero-text">
          Discover How we do it?
        </p>
        <h3 className="h1-hero">Professionalism, Teamwork, and Customer-Centric</h3>
        <HeroBtnWrapper>
          <ButtonR to="/signin" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
