import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import GalleryDetailSection from "@/component/gallery/GalleryDetailSection";
import Layout from "@/component/layout/Layout";
import { galleryList } from "@/data/Data";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Gallery Details Page',
    description: 'Developed by Azizur Rahman',
  }
export default function GalleryDetails({ params } : { params: { slug: string }}) {
    const galleryData = galleryList.find((item) => item.slug === params.slug)
    return (
        <div className="wrapper">
            <Layout>
                {
                    galleryData ? (
                        <>
                            <BreadcrumbSection title="Gallery Details" header="Gallery Details Page"/>
                            <GalleryDetailSection galleryData={galleryData}/>
                        </>
                        
                    ) : (
                        <>
                        <BreadcrumbSection header="Gallery Item Not Found" title="Gallery Details" />
                        <div className="dynamic-error-page-container">
                            <div className="not-found-image-container">
                            <img src="/img/404.jpg" alt='page not found'/>
                            </div>
                            <p className="no-page-found-text">The Gallery item you are looking for does not exist.</p>
                            <Link href="/" className="custom-btn">Go back to Home</Link>
                        </div>
                        </>
                    )
                }
            </Layout>
        </div>
    )
}