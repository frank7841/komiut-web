import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarRoute, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about-us" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Products
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Dashboard
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}