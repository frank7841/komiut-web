import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
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
        <h1 className="h1-hero">Reaching Goals Made Easy</h1>
        <p className="hero-text">
          join us today and recieve ... for your next sucessfull
          project.
        </p>
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
