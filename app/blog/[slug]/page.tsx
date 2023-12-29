import React from "react";
import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { blogDataList } from "@/data/Data";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Blog Details Page',
    description: 'Developed by Azizur Rahman',
  }
export default function BlogDetails({ params }: { params: { slug: string } }) {
  const blogPost = blogDataList.find((item) => item.slug === params.slug);
  return (
    <div className="wrapper">
      <Layout>
        {blogPost ? (
          <>
          <BreadcrumbSection title="Blog Details" header="Blog Details" />
          <BlogDetailSection blogPost={blogPost} />
          </>
        ) : (
          <>
          <BreadcrumbSection header="Blog Not Found" title="Blog Details" />
          <div className="dynamic-error-page-container">
            <div className="not-found-image-container">
              <img src="/img/404.jpg" alt='page not found'/>
            </div>
            <p className="no-page-found-text">The Blog you are looking for does not exist.</p>
            <Link href="/" className="custom-btn">Go back to Home</Link>
          </div>
          </>
        )}
      </Layout>
    </div>
  );
}
