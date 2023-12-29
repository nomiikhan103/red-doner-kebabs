"use client"
import React from 'react'
import BannerSection2 from '../banner/BannerSection2'
import SocialSection from '../social/SocialSection'
import AboutSection2 from '../about/AboutSection2'
import DescribeSection from '../describe/DescribeSection'
import MenuProducts from '../menu/MenuProducts'
import ContactSection2 from '../contact/ContactSection2'
import PricingSection from '../pricing/PricingSection'
import PartnerSection from '../partner/PartnerSection'
import CustomerSection2 from '../customer/CustomerSection2'
import BlogSection from '../blog/BlogSection'
import FooterSection from '../footer/FooterSection'
import SidebarSection from '../sidebar/SidebarSection'

const HomeMain2 = () => {
  return (
    <div className='body-wrapper'>
        <BannerSection2/>
        <SocialSection style='social-sec-2'/>
        <SidebarSection logo="/img/logo/logo-2.png"/>
        <AboutSection2/>
        <DescribeSection/>
        <MenuProducts style='product-2' showMoreBtn={false} endIndex={8}/>
        <ContactSection2/>
        <PricingSection theme=''/>
        <PartnerSection/>
        <CustomerSection2 theme='' header={true}/>
        <BlogSection style='latest-blog-2'/>
        <FooterSection style='footer-2'/>
    </div>
  )
}

export default HomeMain2