"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import DashboardSection from "@/component/user/DashboardSection";
import React from "react";
function UserPage() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection title={"UserAccount"} header={"User Account"} />
        <DashboardSection />
      </Layout>
    </div>
  );
}

export default UserPage;
