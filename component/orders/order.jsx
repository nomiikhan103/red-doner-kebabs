import React from "react";

function Order() {
  return (
    <>
      <section className='tabs-inner-background' style={{ marginTop: "-18px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mt-4 '>
              <table className='table table-bordered'>
                <thead>
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
                <tbody className='tableheight'>
                  <tr className='text-center table-height'>
                    <td></td>
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

export default Order;