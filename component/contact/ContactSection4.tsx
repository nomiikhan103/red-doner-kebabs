import React from "react";

const ContactSection4 = () => {
  return (
    <section>
      <div className="delivery-area delivery-area-3">
        <div
          className="video-area"
          data-background="img/image/video_bg.jpg"
        >
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="watch justify-content-center">
                <a href="" className="video-btn play-video">
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
            <div
              className="delivery"
              data-background="img/delevery-bg.png"
            >
              <div className="row">
                <div
                  className="col-md-7"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
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
                    <a href="contact.html" className="custom-btn-light">
                      Apply Now
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-5"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="delivery-img">
                    <img src="img/image/delivery_man.png" alt="" />
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

export default ContactSection4;
