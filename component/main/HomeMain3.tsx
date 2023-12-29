'use client'
import React from 'react'
import BannerSection from '../banner/BannerSection'
import SocialSection from '../social/SocialSection'
import AboutSection3 from '../about/AboutSection3'
import SubscribeSection from '../newsletter/SubscribeSection'
import ServiceSection from '../service/ServiceSection'
import GallerySection from '../gallery/GallerySection'
import AppSection from '../mobile-app/AppSection'
import ContactSection3 from '../contact/ContactSection3'
import CustomerSection2 from '../customer/CustomerSection2'
import BlogSection from '../blog/BlogSection'
import FooterSection from '../footer/FooterSection'
import SidebarSection from '../sidebar/SidebarSection'
import { ToastContainer } from 'react-toastify'

const HomeMain3 = () => {
  return (
    <div className="body-wrapper">
        <BannerSection theme='banner-3' endIndex={-3}/>
        <SocialSection style='social-sec-3'/>
        <SidebarSection logo="/img/logo/logo-3.png"/>
        <AboutSection3 style=''/>
        <SubscribeSection wrapper='' style='subscribe-3'/>
        <ServiceSection style='service-3' showBtn={false}/>
        <GallerySection theme='' showBtn={false} endIndex={8}/>
        <AppSection/>
        <ContactSection3/>
        <CustomerSection2 theme='theme-3' header={true}/>
        <BlogSection style='latest-blog-3'/>
        <FooterSection style='footer-3'/>
        <ToastContainer/>
    </div>
  )
}

export default HomeMain3