import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import PartnerSection from "@/component/partner/PartnerSection";
import PricingSection from "@/component/pricing/PricingSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Pricing Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Pricing() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Pricing" header="Pricing Page"/>
                <PricingSection theme="theme-1"/>
                <PartnerSection/>
            </Layout>
        </div>
    )
}