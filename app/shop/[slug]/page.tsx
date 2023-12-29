import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection"
import Layout from "@/component/layout/Layout"
import ShopDetailSection from "@/component/shop/ShopDetailSection";
import { productList } from "@/data/Data"
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Shop Details Page',
    description: 'Developed by Azizur Rahman',
  }
export default function ShopDetails({params} : {params:{slug:string}}) {
    const shopData = productList.find((item) => item.slug === params.slug);
    return (
        <div className="wrapper">
            <Layout>
                {
                    shopData ? (
                        <>
                            <BreadcrumbSection header="Shop Details Page" title="Shop Details"/>
                            <ShopDetailSection shopData={shopData}/>
                        </>
                    
                    ) : (
                        <>
                        <BreadcrumbSection header="Product Not Found" title="Shop Details" />
                        <div className="dynamic-error-page-container">
                            <div className="not-found-image-container">
                            <img src="/img/404.jpg" alt='page not found'/>
                            </div>
                            <p className="no-page-found-text">The Product you are looking for does not exist.</p>
                            <Link href="/" className="custom-btn">Go back to Home</Link>
                        </div>
                        </>
                    )
                }
            </Layout>
        </div>
    )
}