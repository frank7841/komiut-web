import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import "./../../App.css";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
      window.addEventListener('scroll', changeNav);      
  }, [])

  return (
    <>
    
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <h1 className="logo-text"><span class="text-white font-semibold">K<i class="fas fa-bus font-yellow"/>MIUT</span></h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about-us">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="">contact us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="">Dashboard</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
