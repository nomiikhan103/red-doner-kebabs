"use client";
import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";

const ScheduleSection = () => {
  const { openVideoModal } = useCafeuContext();
  return (
    <section>
      <div className='availability mb-120'>
        <div className='bg-availa'>
          <div className='container'>
            <div className='position-relative'>
              <div className='row'>
                <div
                  className='col-md-6 col-xl-8 col-lg-7 my-2'
                  data-aos='fade-right'
                  data-aos-duration='1000'
                >
                  <div className='available-content'>
                    <a
                      className='video-btn play-video'
                      role='button'
                      onClick={openVideoModal}
                    >
                      <span className='icofont-ui-play'></span>
                    </a>
                    <h2 className='available-head'>
                      We Have Excellent Quality of Food
                    </h2>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed <br /> do eiusmod tempor incididunt ut labore et
                      dolore
                    </p>
                  </div>
                </div>
                <div
                  className='col-md-6 col-xl-4 col-lg-5 my-2'
                  data-aos='fade-left'
                  data-aos-duration='1000'
                >
                  <div className='avail-inner'>
                    <div className='available-note'>
                      <div className='note-head'>
                        <h2 className='note-title mb-0'>Restaurant</h2>
                        <span className='sm-title mb-0'>Opening Times</span>
                      </div>
                      <ul className='note-ul'>
                        <li className='note-li'>
                          <p className='day'>Monday</p>
                          <p className='time'>Closed</p>
                        </li>
                        <li className='note-li'>
                          <p className='day'>Tuesday to Wednesday</p>
                          <p className='time'>19:00 – 23:30</p>
                        </li>
                        <li className='note-li'>
                          <p className='day'>Thursday </p>
                          <p className='time'>13:30 – 16:00 : 19:00 – 23:30</p>
                        </li>
                        <li className='note-li'>
                          <p className='day'>Friday</p>
                          <p className='time'>19:00 – 23:30</p>
                        </li>
                        <li className='note-li'>
                          <p className='day'>Saturday to Sunday</p>
                          <p className='time'>13:30 – 16:00 : 19:00 – 23:30 </p>
                        </li>
                      </ul>

                      <div className='note-footer'>
                        <h4 className='note-footer-text'>Call Us Now</h4>
                        <a
                          className='note-footer-text'
                          href='tel:+993240-765230'
                        >
                          +34952443505
                        </a>
                      </div>
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

export default ScheduleSection;
