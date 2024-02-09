import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import UserLoginForm from "@/component/form/UserloginForm";

import Layout from "@/component/layout/Layout";

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
        <UserLoginForm />
      </Layout>
    </div>
  );
}
