import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import LoginSection from "@/component/login/LoginSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu My Account Page',
    description: 'Developed by Azizur Rahman',
  }
export default function MyAccount() {
    return (
        <Layout>
            <BreadcrumbSection title="My Account" header="My Account"/>
            <LoginSection/>
        </Layout>
    )
}