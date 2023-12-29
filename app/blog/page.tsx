import BlogListSection from "@/component/blog/BlogListSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Blog List Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Blog() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Blog" header="Blog Page"/>
                <BlogListSection/>
            </Layout>
        </div>
    )
}