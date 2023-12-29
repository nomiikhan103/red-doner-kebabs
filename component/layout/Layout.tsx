"use client"
import React from 'react'
import Header from '../header/Header';
import SidebarSection from '../sidebar/SidebarSection';
import FooterSection from '../footer/FooterSection';
import VideoModal from '../modal/VideoModal';
import { ToastContainer } from 'react-toastify';
import SearchModal from '../modal/SearchModal';
interface LayoutProps {
    children: any;
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="wrapper">
        <Header style={"header-default"}/>
        <SidebarSection logo="/img/logo/logo.png"/>
        <div className='body-wrapper'>
            {children}
            <FooterSection style='footer-1'/>
        </div>
        <VideoModal/>
        <SearchModal style='default'/>
        <ToastContainer />
    </div>
  )
}

export default Layout