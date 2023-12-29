import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection"
import Layout from "@/component/layout/Layout"
import ServiceDetailSection from "@/component/service/ServiceDetailSection"
import { serviceList } from "@/data/Data"
import Link from "next/link"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Service Details Page',
    description: 'Developed by Azizur Rahman',
  }
export default function ServiceDetails({ params } : { params: { slug: string }}) {
    const serviceData = serviceList.find((item) => item.slug === params.slug)
    return (
        <div className="wrapper">
            <Layout>
                {
                    serviceData ? (
                        <>
                            <BreadcrumbSection title="Service Details" header="Service Details Page"/>
                            <ServiceDetailSection serviceData={serviceData}/> 
                        </>
                    ) : (
                        <>
                            <BreadcrumbSection title="Service Not Found" header="Service Details"/>
                            <div className="dynamic-error-page-container">
                                <div className="not-found-image-container">
                                <img src="/img/404.jpg" alt='page not found'/>
                                </div>
                                <p className="no-page-found-text">The Service you are looking for does not exist.</p>
                                <Link href="/" className="custom-btn">Go back to Home</Link>
                            </div>
                        </>
                    )
                }
                
            </Layout>
        </div>
    )
}