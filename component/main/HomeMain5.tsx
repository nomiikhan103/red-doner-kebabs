'use client'
import React from 'react'
import BannerSection4 from '../banner/BannerSection4'
import AboutSection3 from '../about/AboutSection3'
import SocialSection from '../social/SocialSection'
import MenuBookSection from '../menu/MenuBookSection'
import OfferCtaSection from '../offer/OfferCtaSection'
import InfoSection from '../info/InfoSection'
import TeamSection2 from '../team/TeamSection2'
import PartnerSection from '../partner/PartnerSection'
import CustomerSection2 from '../customer/CustomerSection2'
import BlogSection2 from '../blog/BlogSection2'
import FooterSection from '../footer/FooterSection'
import SidebarSection from '../sidebar/SidebarSection'
import { ToastContainer } from 'react-toastify'

const HomeMain5 = () => {
  return (
    <div className='body-wrapper'>
        <BannerSection4/>
        <SocialSection style='social-sec-4'/>
        <SidebarSection logo="/img/logo/logo-3.png"/>
        <AboutSection3 style='home5-about dark-mode'/>
        <MenuBookSection/>
        <OfferCtaSection/>
        <InfoSection/>
        <TeamSection2 theme='dark-mode border-tp'/>
        <PartnerSection/>
        <CustomerSection2 theme='theme-3 dark-mode' header={false}/>
        <BlogSection2/>
        <FooterSection style='footer-3 dark-mode border-tp'/>
        <ToastContainer/>
    </div>
  )
}

export default HomeMain5