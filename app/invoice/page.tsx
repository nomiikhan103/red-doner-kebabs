"use client";
import Layout from "@/component/layout/Layout";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Orderinvoice from "@/component/invoicedetail/orderinvoice";

function Invoicepage() {
  return (
    <div className='wrapper'>
      <Layout>
        <BreadcrumbSection title={"invoice"} header={"Order Complete"} />
        <Orderinvoice />
      </Layout>
    </div>
  );
}

export default Invoicepage;
