import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TodayOrder from "@/component/today-order/todayorder";
import Account from "@/component/account-details/account";
import Order from "@/component/orders/order";
import "./dashboard.scss";
import { rgbToHex } from "@mui/material";

const DashboardSection = () => {
  return (
    <div className='tab-padding'>
      <Tabs
        defaultActiveKey='profile'
        id='justify-tab-example'
        className=' tab'
        style={{}}
        justify
      >
        <Tab
          eventKey='home'
          className='tab-color'
          title={<span className='tabname'>Account Details</span>}
        >
          <Account />
        </Tab>
        <Tab
          eventKey='profile'
          className='tab'
          title={<span className='tabname'>Today Order</span>}
        >
          <TodayOrder />
        </Tab>
        <Tab
          eventKey='longer-tab'
          className='tab'
          title={<span className='tabname'>Orders</span>}
        >
          <Order />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DashboardSection;
