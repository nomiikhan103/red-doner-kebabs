import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import ServiceSection from "@/component/service/ServiceSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Service Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Service() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Service" header="Service Page"/>
                <ServiceSection style="" showBtn={true}/>
            </Layout>
        </div>
    )
}