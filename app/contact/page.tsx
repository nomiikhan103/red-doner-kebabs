import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactSection from "@/component/contact/ContactSection";
import Layout from "@/component/layout/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: " Contact Page",
  description: "Made by HubSolutions",
};
export default function Contact() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection title='Contact' header='Contact Us' />
        <ContactSection />
      </Layout>
    </div>
  );
}
