import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TodayOrder from "@/component/today-order/todayorder";
import Account from "@/component/account-details/account";
import Order from "@/component/orders/order";
import { rgbToHex } from "@mui/material";

const DashboardSection = () => {
  return (
    <div className='tab-padding'>
      <Tabs
        defaultActiveKey='profile'
        id='justify-tab-example'
        className='mb-3 '
        style={{ backgroundColor: "#f5f3f4" }}
        justify
      >
        <Tab
          eventKey='home'
          title={
            <span
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Account Details
            </span>
          }
        >
          <Account />
        </Tab>
        <Tab
          eventKey='profile'
          title={
            <span style={{ color: "black", fontWeight: "bold" }}>
              Today Order
            </span>
          }
        >
          <TodayOrder />
        </Tab>
        <Tab
          eventKey='longer-tab'
          className='text-dark'
          title={
            <span style={{ color: "black", fontWeight: "bold" }}>Orders</span>
          }
        >
          <Order />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DashboardSection;
