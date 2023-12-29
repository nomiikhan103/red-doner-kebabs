import GalleryPageSection from "@/component/gallery/GalleryPageSection";
import Layout from "@/component/layout/Layout";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Gallery Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Gallery() {
    return (
        <div className="wrapper">
            <Layout>
                <GalleryPageSection/>
            </Layout>
        </div>
    )
}