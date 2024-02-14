"use client";

//import React from "react";
import { Form } from "react-bootstrap";
import React from "react";
import "./delivery.scss";
const Deliveryform = () => {
  return (
    <>
      <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-lg-0 mb-50 mb-lg-0'>
        <div className='checkout-billing-fields'>
          <h4 className='cafeu-billing-details-title'>Billing details</h4>

          <div className=' checkout-billing-fields__field-wrapper cafeu-submit-form-default cafeu-woo-form-billing-form-style-custom '>
            <div className='row d-flex justify-content-evenly'>
              <p
                className='form-row form-row-first validate-required'
                id='billing_first_name_field'
              >
                <label htmlFor='billing_first_name' className=''>
                  Full Name&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <input
                    type='text'
                    required
                    className='input-text '
                    name='billing_first_name'
                    id='billing_first_name'
                    placeholder=''
                  />
                </span>
              </p>
              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className=''>
                  Email&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <input
                    type='text'
                    required
                    className='input-text '
                    name='billing_last_name'
                    id='billing_last_name'
                    placeholder=''
                  />
                </span>
              </p>

              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className=''>
                  Phone&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <input
                    type='text'
                    required
                    className='input-text '
                    name='billing_last_name'
                    id='billing_last_name'
                    placeholder=''
                  />
                </span>
              </p>

              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className=''>
                  Delivery Time&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <Form.Select
                    name='billing_country'
                    id='billing_country'
                    required
                    className='country_to_state country_select select2-hidden-accessible'
                  >
                    <option value=''>Select a country / region…</option>
                    <option value='AF'>Afghanistan</option>
                    <option value='AX'>Åland Islands</option>
                    <option value='AL'>Albania</option>
                    <option value='ZM'>Zambia</option>
                    <option value='ZW'>Zimbabwe</option>
                  </Form.Select>
                </span>
              </p>
              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className=''>
                  Delivery Location&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <Form.Select
                    name='billing_country'
                    id='billing_country'
                    required
                    className='country_to_state country_select select2-hidden-accessible'
                  >
                    <option value=''>Select a country / region…</option>
                    <option value='AF'>Afghanistan</option>
                    <option value='AX'>Åland Islands</option>
                    <option value='AL'>Albania</option>
                    <option value='ZM'>Zambia</option>
                    <option value='ZW'>Zimbabwe</option>
                  </Form.Select>
                </span>
              </p>

              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className=''>
                  Postal Code&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <input
                    type='text'
                    required
                    className='input-text '
                    name='billing_last_name'
                    id='billing_last_name'
                    placeholder=''
                  />
                </span>
              </p>

              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className='address-label'>
                  Address&nbsp;
                  <abbr className='required ' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper'>
                  <textarea
                    name='order_comments'
                    className='input-text delivery-address'
                    id='order_comments'
                    required
                    placeholder=''
                    rows={5}
                    cols={27}
                  ></textarea>
                </span>
              </p>
              <p
                className='form-row form-row-last validate-required'
                id='billing_last_name_field'
              >
                <label htmlFor='billing_last_name' className='address-label'>
                  Address 2&nbsp;
                  <abbr className='required' title='required'></abbr>
                </label>
                <span className='checkout-input-wrapper '>
                  <textarea
                    name='order_comments'
                    className='input-text delivery-address'
                    required
                    id='order_comments'
                    placeholder=''
                    rows={5}
                    cols={28}
                  ></textarea>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='checkout-shipping-fields  cafeu-woo-form-shipping-form-style-custom'></div>
        <div className='checkout-additional-fields mt-10'>
          <h4 className='cafeu-billing-details-title'>Notes</h4>

          <div className='checkout-additional-fields__field-wrapper'>
            <p
              className='form-row notes'
              id='order_comments_field'
              data-priority=''
            >
              {/* <label htmlFor='order_comments' className='Name'>
              Order notes&nbsp;<span className='optional'>(optional)</span>
            </label> */}
              <span className='checkout-input-wrapper'>
                <textarea
                  name='order_comments'
                  className='input-text '
                  id='order_comments'
                  placeholder=''
                  rows={10}
                  cols={59}
                ></textarea>
              </span>
            </p>{" "}
          </div>
          <div>
            <h4 className='cafeu-billing-details-title'>Payment Type</h4>
            <div className='d-flex justify-content-between align-items-center'>
              <input type='radio' name='payment' /> Payment on Cash
              <img
                src='img/cash-on-delivery.png'
                style={{ width: "7%" }}
                alt=''
              />
              <input type='radio' name='payment' /> Card Payment
              <img src='img/atm-card.png' style={{ width: "7%" }} alt='' />
            </div>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </div>
    </>
  );
};

export default Deliveryform;
