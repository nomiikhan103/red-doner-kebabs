import BlogGridSection from "@/component/blog/BlogGridSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Blog Grid Page',
    description: 'Developed by Azizur Rahman',
  }
export default function BlogGrid() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Blog" header="Blog Grid"/>
                <BlogGridSection/>
            </Layout>
        </div>
    )
}