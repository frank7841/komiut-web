import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";
 import {AiFillTwitterSquare,AiFillLinkedin,AiFillFacebook, AiFillYoutube} from "react-icons/ai"
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">How it works</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Terms & conditions</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Destinations</FooterLink>
            <FooterLink href="#">Our Locations</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Customers</FooterH2>
            <FooterLink href="#">Our Customers</FooterLink>
            <FooterLink href="#">How to reach us</FooterLink>
            <FooterLink href="#">Video Samples</FooterLink>
            <FooterLink href="#">Agency</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="#"><AiFillFacebook size={28}/> &nbsp;&nbsp; Facebook</FooterLink>
            <FooterLink href="#"><AiFillYoutube size={28}/>&nbsp;&nbsp; Youtube</FooterLink>
            <FooterLink href="#"><AiFillTwitterSquare size={28}/>&nbsp;&nbsp; Twitter</FooterLink>
            <FooterLink href="#"><AiFillLinkedin size={28}/>&nbsp;&nbsp; Linkedin</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- komiut -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
