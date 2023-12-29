import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";

const ContactSection3 = () => {
  const {openVideoModal} = useCafeuContext()
  return (
    <section>
      <div className="delivery-area delivery-area-3">
        <div className="video-area">
          <div className="container">
            <div className="row">
              <div className="watch justify-content-center">
                <a 
                className="video-btn play-video"
                role="button"
                onClick={openVideoModal}
                >
                  <span className="icofont-ui-play"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="delivery-area delivery-area-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="delivery">
              <div className="row">
                <div className="col-md-7">
                  <div className="delivery-content">
                    <h2 className="delivery-title mb-0">
                      Join As a Delivery Man
                    </h2>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiu tempor <br /> incididunt ut labore et dolore
                      magna aliqua. Quis ipsum suspendis ultries <br /> gravida.
                      Risus commodo viverra maecenas accumsan
                    </p>
                    <a href="" className="custom-btn-light">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="delivery-img">
                    <img src="img/delevery.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection3;
