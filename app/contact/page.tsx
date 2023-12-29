import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactSection from "@/component/contact/ContactSection";
import Layout from "@/component/layout/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Contact Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Contact() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Contact" header="Contact Us"/> 
                <ContactSection/>
            </Layout>
        </div>
    )
}