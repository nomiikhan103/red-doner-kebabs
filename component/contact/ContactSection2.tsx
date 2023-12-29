'use client'
import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";
import ContactForm from "../form/ContactForm";

const ContactSection2 = () => {
  const {openVideoModal} = useCafeuContext()
  return (
    <section>
      <div className="contact-area contact-area-2">
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
          className="describe-content"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="contact pt-3">
            <div className="container">
              <div className="form-wrapper">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="form-inside">
                      <div className="form-head">
                        <div className="section-head text-center">
                          <span className="sm-title ">Contact Us</span>
                          <h2 className="sec-title">Contact Us Information</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="contact-form mt-20">
                          <ContactForm/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-none">
                    <div className="contact-offer">
                      <img src="img/contact.png" alt="Image not found" />
                    </div>
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

export default ContactSection2;
