"use client";
import React from "react";
import BillingSection from "./collectionform";
import OrderSection from "./OrderSection";
import { useCafeuContext } from "@/context/CafeuContext";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./checkout.scss";
import Collectionform from "./collectionform";
import Deliveryform from "./deliveryform";

const CheckoutSection = () => {
  const { haveCoupon, handleCouponBtn } = useCafeuContext();
  return (
    <div className='page-area pt-100 pb-85'>
      <div className='container'>
        <div className='row'>
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <Row>
              <Col sm={12}>
                <Nav
                  variant='pills'
                  className='flex-row d-flex justify-content-center'
                >
                  <Nav.Item className='order-type mx-1'>
                    <Nav.Link className='order-type-img' eventKey='first'>
                      {" "}
                      <img src='img/collection.png' alt='' />{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='order-type'>
                    <Nav.Link eventKey='second' className='order-type-img'>
                      {" "}
                      <img src='img/delivery.png' alt='' />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <form className='checkout checkout-checkout'>
                      <div className='row' id='customer_details'>
                        <Collectionform />
                        <OrderSection />
                      </div>
                    </form>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <form className='checkout checkout-checkout'>
                      <div className='row' id='customer_details'>
                        <Deliveryform />
                        <OrderSection />
                      </div>
                    </form>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='cafeu-page-content'>
              <div className='post-entry post-entry--top-margin'>
                <div className='checkout'>
                  <div className='checkout-notices-wrapper'></div>
                  <div className='checkout-form-coupon-toggle'>
                    {/* <div className='checkout-info'>
                      If you are returning customer ? Then{" "}
                      <a
                        className='showcoupon'
                        role='button'
                        onClick={handleCouponBtn}
                      >
                        Click here to login
                      </a>
                    </div> */}
                  </div>

                  <form
                    className={`checkout_coupon checkout-form-coupon ${
                      haveCoupon ? "d-block" : "d-none"
                    }`}
                  >
                    <p>If you have a coupon code, please apply it below.</p>

                    <p className='form-row form-row-first'>
                      <label
                        htmlFor='coupon_code'
                        className='screen-reader-text'
                      >
                        Coupon:
                      </label>
                      <input
                        type='text'
                        name='coupon_code'
                        className='input-text'
                        placeholder='Coupon code'
                        id='coupon_code'
                        readOnly
                      />
                    </p>

                    <p className='form-row form-row-last'>
                      <button
                        type='submit'
                        className='button wp-element-button'
                        name='apply_coupon'
                      >
                        Apply coupon
                      </button>
                    </p>

                    <div className='clear'></div>
                  </form>
                  <div className='checkout-notices-wrapper'></div>
                  {/* <form className='checkout checkout-checkout'>
                    <div className='row' id='customer_details'>
                      <BillingSection />
                      <OrderSection />
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
