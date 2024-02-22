import React from "react";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "./orderinvoice.scss";
import { useCafeuContext } from "@/context/CafeuContext";
import { useEffect, useState } from "react";
import ConfirmTable from "../table/CofirmTale";
import CouponSection from "../cart/CouponSection";
import Itemstotalprice from "../cart/itemstotalprice";
function Orderinvoice() {
  const { cart, removeFromCart } = useCafeuContext();

  return (
    <>
      <div className='container'>
        <div className='row g-0 mt-3 p-3 rounded rowcolor bg-light'>
          <h4 className='mainheading'>Order Status</h4>
          <div className='col-md-2 col-sm-3  order-status'>
            <div className='rounded boxsize'>
              <img src='img/invoice/Icon.png' alt='' />
              <h6 className='text-center'>Order Recieved</h6>
            </div>
          </div>
          <div className='col-md-2 col-sm-3 order-status'>
            <div className='rounded boxsize'>
              <img src='img/invoice/Orderaccept.png' alt='' />
              <h6 className='text-center'>Order Accept</h6>
            </div>
          </div>

          <div className='col-md-2 col-sm-3 order-status'>
            <div className='rounded boxsize'>
              <img src='img/invoice/Orderpreparing.png' alt='' />
              <h6 className='text-center'>Order Preparing</h6>
            </div>
          </div>
          <div className='col-md-2 col-sm-3 order-status '>
            <div className='rounded textcolor boxsize'>
              <img src='img/invoice/Order.png' alt='' />
              <h6 className='text-center '>Order Ready</h6>
            </div>
          </div>
          <div className='col-md-2 col-sm-3 order-status'>
            <div className='rounded textcolor boxsize'>
              <img src='img/invoice/Orderdelivered.png' alt='' />
              <h6 className='text-center'>Order Delivered</h6>
            </div>
          </div>
          <div className='col-md-2 col-sm-3 order-status'>
            <div className='rounded textcolor boxsize'>
              <img src='img/invoice/Ordercancel.png' alt='' />
              <h6 className='text-center'>Order Cancled</h6>
            </div>
          </div>
        </div>
        <div className='row g-0 mt-3  rounded d-flex justify-content-center bg-light p-3'>
          <h4 className='mb-4 mainheading'>Your Order will be prepared in</h4>

          <div className='col-md-3  col-4 textcolor ordertime text-center rounded'>
            <h1>08</h1>
            <h3>Hours</h3>
          </div>

          <div className='col-md-3 col-4 text-center ordertime textcolor rounded'>
            <h1>49</h1>
            <h3>Min</h3>
          </div>
          <div className='col-md-3 col-4 text-center ordertime textcolor rounded'>
            <h1>50</h1>
            <h3>Sec</h3>
          </div>
        </div>
        <div className='row g-0 mt-3  rounded rowcolor'>
          <div className='col-md-4  col-sm-6 text-center  user-info '>
            <p>Invoice # INV-231127-273 </p>
          </div>
          <div className='col-md-4 col-sm-6 text-center  user-info '>
            <p>Invoice Date 27 Nov 05:05 </p>
          </div>
          <div className='col-md-4 col-sm-6 text-center  user-info '>
            <p>Status: Order Cancel</p>
          </div>
          <div className='col-md-4 col-sm-12 text-center user-info  mt-2 '>
            <p>From:</p>
            <p>
              <b>Red Doner & Pizzas</b>
            </p>
            <p>
              Avda Gamonal 5. local 2 Arroyo de la miel , Benalmádena, Spain,
              29630
            </p>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4 col-sm-12 text-center user-info  mt-2 '>
            <p>To:</p>

            <p>
              Name: Nouman khalil Email: nouman@gmail.com Phone: 03345862536
              Payment: cash Type: collection
            </p>
          </div>

          <div className='col-md-12 col-12'>
            {/* <Table size='sm' responsive className='text-center '>
              <thead className='textcolor'>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>image</td>
                  <td>{item.ItemTitle}</td>
                  <td>2.5</td>
                  <td>2</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>image</td>
                  <td>Vegetable Spring Rolls</td>
                  <td>4.5</td>
                  <td>1</td>
                  <td>{item.Price}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>image</td>
                  <td>Vegetable Pakora</td>
                  <td>4.5</td>
                  <td>1</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>image</td>
                  <td>Seekh Kebab Tandoori</td>
                  <td>4.99</td>
                  <td>1</td>
                  <td>4.99</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>image</td>
                  <td>Grilled Fish</td>
                  <td>13.99</td>
                  <td>1</td>
                  <td>13.99</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>image</td>
                  <td>Set Menu 1</td>
                  <td>16.99</td>
                  <td>1</td>
                  <td>16.99</td>
                </tr>
              </tbody>
            </Table> */}
            <ConfirmTable
              array={cart}
              removeItem={removeFromCart}
              cartTable={true}
            />
            <Itemstotalprice />
          </div>
        </div>
      </div>
    </>
  );
}

export default Orderinvoice;
