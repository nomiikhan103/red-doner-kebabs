'use client'
import React from 'react'
import BannerSection3 from '../banner/BannerSection3'
import SocialSection from '../social/SocialSection'
import OrderFeatureSection from '../feature/OrderFeatureSection'
import FoodCategorySection from '../category/FoodCategorySection'
import TopRatedResturantSection from '../resturants/TopRatedResturantSection'
import OfferCtaSection from '../offer/OfferCtaSection'
import TeamSection2 from '../team/TeamSection2'
import ContactSection3 from '../contact/ContactSection3'
import CustomerSection2 from '../customer/CustomerSection2'
import BlogSection from '../blog/BlogSection'
import FooterSection from '../footer/FooterSection'
import SidebarSection from '../sidebar/SidebarSection'
import { ToastContainer } from 'react-toastify'

const HomeMain4 = () => {
  return (
    <div className='body-wrapper'>
        <BannerSection3/>
        <SocialSection style='social-sec-4'/>
        <SidebarSection logo="/img/logo/logo-3.png"/>
        <OrderFeatureSection/>
        <FoodCategorySection/>
        <TopRatedResturantSection/>
        <OfferCtaSection/>
        <TeamSection2 theme=''/>
        <ContactSection3/>
        <CustomerSection2 theme='theme-3' header={true}/>
        <BlogSection style='latest-blog-3 home4-blog pt-100 pb-65'/>
        <FooterSection style='footer-3'/>
        <ToastContainer/>
    </div>
  )
}

export default HomeMain4