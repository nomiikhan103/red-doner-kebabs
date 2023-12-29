import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import PartnerSection from "@/component/partner/PartnerSection";
import TeamDetailSection from "@/component/team/TeamDetailSection";
import { teamList } from "@/data/Data";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Cafeu Team Details Page',
    description: 'Developed by Azizur Rahman',
  }
export default function TeamDetails({ params } : { params: { slug: string }}) {
    const teamData = teamList.find((item) => item.slug === params.slug)
    return (
        <div className="wrapper">
            <Layout>
                {
                    teamData ? (
                        <>
                            <BreadcrumbSection title="Team Details" header="Team Details Page"/>
                            <TeamDetailSection teamData={teamData}/>
                        </>
                        
                    ):(
                        <>
                        <BreadcrumbSection header="Team Member Not Found" title="Team Details" />
                        <div className="dynamic-error-page-container">
                            <div className="not-found-image-container">
                            <img src="/img/404.jpg" alt='page not found'/>
                            </div>
                            <p className="no-page-found-text">The Team member you are looking for does not exist.</p>
                            <Link href="/" className="custom-btn">Go back to Home</Link>
                        </div>
                        </>
                    )
                }
                <PartnerSection/>
            </Layout>
        </div>
    )
}