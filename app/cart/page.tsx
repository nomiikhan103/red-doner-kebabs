import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CartSection from "@/component/cart/CartSection";
import Layout from "@/component/layout/Layout";
import PartnerSection from "@/component/partner/PartnerSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Cart Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Cart() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection header="Cart Page" title="Cart"/>
                <CartSection/>
                <PartnerSection/>
            </Layout>
        </div>
    )
}