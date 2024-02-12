"use client";
import React from "react";

function TodayOrder() {
  return (
    <>
      <section
        className='tabs-inner-background '
        style={{ border: "1px solid black" }}
      >
        <div className='container  p-3'>
          <div className='row'>
            <div className='col-md-12   table-responsive'>
              <table className='table table-bordered  '>
                <thead className=''>
                  <tr className='text-center'>
                    <th>#</th>
                    <th>Order No </th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Type</th>
                    <th>Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodayOrder;
