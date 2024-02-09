import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import Layout from "@/component/layout/Layout";
import Usersignsection from "@/component/usersign/usersignsection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "Developed by Azizur Rahman",
};
export default function Usersignin() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection
          title={"User Registration"}
          header={"User Registration"}
        />
        <Usersignsection />
      </Layout>
    </div>
  );
}
