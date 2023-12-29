import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CheckoutSection from "@/component/checkout/CheckoutSection";
import Layout from "@/component/layout/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Checkout Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Checkout() {
    return (
        <Layout>
            <BreadcrumbSection header="Checkout" title="Chekout"/>
            <CheckoutSection/>
        </Layout>
    )
}