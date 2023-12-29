"use client"
import { useCafeuContext } from "@/context/CafeuContext";
import { bannerData2 } from "@/data/Data";
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules"

const BannerSection2 = () => {
  const {openVideoModal} = useCafeuContext()
  return (
    <section>
      <div className="banner banner-2">
        <Swiper 
        className="swiper bannerSlider"
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".banner-pagination",
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        >
            {bannerData2.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
              <div className={`banner-bg ${item.banerBg}`}>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-md-10 col-lg-9 col-xl-8 my-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="slider-details">
                        <div className="text-inner">
                          <span className="sm-title sm-title2 mb-0">
                            {item.smTitle}
                          </span>
                          <h1 className="banner-title banner-title2">
                            {item.title}
                          </h1>
                          <p className="banner-des banner-des2">
                            Lorem ipsum dolor sit amet, conscetur adipiscing
                            elit, sed do eimod <br /> tempor incididunt ut
                            labore et dolore magna aliqua Quis
                          </p>

                          <div className="banner-btn-sec mt-3">
                            <a 
                            className="custom-btn"
                            href="#"
                            >
                              Order Now
                            </a>
                            <div className="watch">
                              <a 
                              className="video-btn play-video" 
                              role="button" onClick={openVideoModal}>
                                <span className="icofont-ui-play"></span>{" "}
                              </a>{" "}
                              <span className="wc-btn">Watch Video</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>  
            ))}
            
          <div className="banner-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSection2;
