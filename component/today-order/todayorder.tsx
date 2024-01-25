"use client";
import React from "react";

function TodayOrder() {
  return (
    <>
      <section
        className='tabs-inner-background mt-3'
        style={{ marginTop: "-18px" }}
      >
        <div className='container test'>
          <div className='row'>
            <div className='col-md-12 mt-4  table-responsive'>
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
