import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import Layout from "@/component/layout/Layout";
import LoginSection from "@/component/signup/LoginSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "Developed by Azizur Rahman",
};
export default function Signup() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection title={"Userlogin"} header={"User Login"} />
        <LoginSection />
      </Layout>
    </div>
  );
}
