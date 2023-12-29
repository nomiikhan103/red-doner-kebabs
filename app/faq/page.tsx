import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CustomerSection from '@/component/customer/CustomerSection'
import FaqSection from '@/component/faq/FaqSection'
import Layout from '@/component/layout/Layout'
import PartnerSection from '@/component/partner/PartnerSection'
import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu FAQ Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Page() {
  return (
    <div className='wrapper'>
        <Layout>
            <BreadcrumbSection title='FAQ' header='FAQ Page'/>
            <FaqSection/>
            <PartnerSection/>
            <CustomerSection/>
        </Layout>
    </div>
  )
}

