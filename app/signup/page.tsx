import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import Layout from "@/component/layout/Layout";
import Usersignsection from "@/component/usersign/usersignsection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Resgistration Page",
  description: "Developed by Azizur Rahman",
};
export default function Signup() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection
          title={"UserResgistration"}
          header={"User Resgistration"}
        />
        <Usersignsection />
      </Layout>
    </div>
  );
}
