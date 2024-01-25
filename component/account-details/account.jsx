import React from "react";
// import "./account-details.scss";
function Account() {
  return (
    <section
      style={
        {
          // border: "1px solid red",
        }
      }
      className='tabs-inner tabs-width'
    >
      <div className='container test'>
        <div className='row'>
          <div className='col-md-12 mb-4'>
            <h2 className='mt-3'>
              Personal infomation
              <hr style={{ marginTop: "-1px" }} />
            </h2>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-6  d-flex personal-info-padding  '>
            <span style={{ fontSize: "20px" }}>Name</span>
            <h5 className=' w-50 backgroundcolor mx-4'>s</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6  d-flex personal-info-padding'>
            <span className='required ' style={{ fontSize: "20px" }}>
              Email
            </span>
            <h5 className=' w-50 backgroundcolor mx-4'>s</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 mt-4'>
            <h2>
              Address
              <hr style={{ marginTop: "-1px" }} />
            </h2>
          </div>
        </div>

        <div className='row mb-2 '>
          <div className='col-md-6   d-flex  address-padding'>
            <span className='required ' style={{ fontSize: "20px" }}>
              Address
            </span>

            <h5 className='w-50  backgroundcolor mx-4'>ss</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6  d-flex ' style={{ marginLeft: "98px" }}>
            <a
              href='#'
              className='btn backgroundcolor text-dark address-btn w-50'
            >
              <i
                class='icofont-plus-circle me-1'
                style={{ fontSize: "1.2rem" }}
              ></i>{" "}
              Add Address
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
