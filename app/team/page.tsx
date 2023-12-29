import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import PartnerSection from "@/component/partner/PartnerSection";
import TeamListSection from "@/component/team/TeamListSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Team Page',
    description: 'Developed by Azizur Rahman',
  }
export default function Team() {
    return (
        <div className="wrapper">
            <Layout>
                <BreadcrumbSection title="Team" header="Team Page"/>
                <TeamListSection/>
                <PartnerSection/>
            </Layout>
        </div>
    )
}