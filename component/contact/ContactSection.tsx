import React from "react";

const ContactSection = () => {
  return (
    <div className='contact cpy-6' data-aos='fade-up' data-aos-duration='1000'>
      <div className='container'>
        <div className='form-wrapper inner'>
          <div className='row'>
            <div className='col-xl-8'>
              <div className='form-inside'>
                <div
                  className='form-head'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='section-head text-center'>
                    <span className='sm-title '>Contact Us</span>
                    <h2 className='sec-title'>Please Get In Touch With Us</h2>
                  </div>
                </div>
                <div className='row'>
                  <div
                    className='contact-form pt-15'
                    data-aos='fade-up'
                    data-aos-duration='1500'
                  >
                    <form action='mail.php' method='post' id='contact-message'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-group flex-nowrap mb-30'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Your Name *'
                            />
                            <span className='right-input-icon'>
                              <i className='icofont-ui-user'></i>
                            </span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-group flex-nowrap mb-30'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Your Email *'
                            />
                            <span className='right-input-icon'>
                              <i className='icofont-email'></i>
                            </span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-group flex-nowrap mb-30'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Your Phone *'
                            />
                            <span className='right-input-icon'>
                              <i className='icofont-phone'></i>
                            </span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-group flex-nowrap mb-30'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Your Location *'
                            />
                            <span className='right-input-icon'>
                              <i className='icofont-location-pin'></i>
                            </span>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <textarea
                            name='message'
                            className='form-control'
                            placeholder='Comment *'
                            rows={5}
                          ></textarea>
                        </div>
                      </div>
                      <div className='submit-button-sec mt-30'>
                        <button type='submit' className='custom-btn'>
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-xl-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='contact-offer'>
                <iframe
                  src='https://www.google.com/maps/embed/v1/place?q=Avda+Gamonal+5.+local+2+Arroyo+de+la+miel+,+Benalmádena,+Spain&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
