"use client";
import { sum } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import "./aboutsection.scss";
const AboutSection = () => {
  return (
    <section>
      <div className='about about-1 cpy-8'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 col-md-6 mb-4'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <div className='about-img'>
                <img src='img/image/restaurant.png' alt='' />
              </div>
            </div>

            <div
              className='col-lg-6 col-md-6 mb-4'
              // data-aos='fade-left'
              // data-aos-duration='1000'
            >
              <div className='h-100 d-flex align-items-start pl-40'>
                <div className='about-details'>
                  <span className='sm-title'>About Us </span>
                  <h2 className='about-title mb-3'>
                    Welcome To Red Doner & Pizzas Restaurant
                  </h2>
                  <p className='about-des mb-4'>
                    Quis autem vel eum iure reprehenderit qui in evoluptate
                    velit esse qua nihil
                    <br /> molestiae consequatur, vel illum qui dolorem eum
                    fugiat quvoluptas nulla <br /> pariatureaque ipsa quae ab
                    illo inventore veritatis et quasi architecto <br /> beatae
                    vitae dicta sunt explicabo.
                  </p>
                  <div className='service-list'>
                    <ul className='service-ul'>
                      <li className='ab-service-li mb-4'>
                        <div className='service-icon'>
                          <img src='img/icon/order.png' alt='' />
                        </div>
                        <div className='service-name-des'>
                          <h4 className='service-name mb-1'>Order Online</h4>
                          <p className='service-des'>
                            Qariatureaque ipsa quae a illo inventore <br />{" "}
                            veritatis et quasi architecto
                          </p>
                        </div>
                      </li>
                      <li className='ab-service-li mb-4'>
                        <div className='service-icon'>
                          <img src='img/icon/take-away.png' alt='' />
                        </div>
                        <div className='service-name-des'>
                          <h4 className='service-name mb-1'>Takeaway</h4>
                          <p className='service-des'>
                            Qariatureaque ipsa quae a illo inventore <br />{" "}
                            veritatis et quasi architecto
                          </p>
                        </div>
                      </li>

                      <li className='ab-service-li mb-4'>
                        <div className='service-icon'>
                          <img src='img/icon/delivery-man.png' alt='' />
                        </div>
                        <div className='service-name-des'>
                          <h4 className='service-name mb-1'>Home delivery</h4>
                          <p className='service-des'>
                            Qariatureaque ipsa quae a illo inventore <br />{" "}
                            veritatis et quasi architecto
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div className='service-button-wrap mt-40'>
                    <Link href='/about' className='custom-btn'>
                      About Us
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
