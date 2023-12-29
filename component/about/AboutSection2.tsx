import Link from "next/link";
import React from "react";

const AboutSection2 = () => {
  return (
    <section>
      <div className="about about-2 cpy-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div
                className="about-img"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img src="img/about/about-2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div
                className="about-content pl-50"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <p className="sec-sm-title">about us</p>
                <h2 className="title mb-0">
                  We With The Aspects Fish Professional Services
                </h2>

                <p className="des">
                  Design of choice for many of the world’s leading enterprises
                  end technology challengers. We help businesses elevate the
                  alue ere is custom software to development, product design,
                  sed apor lored incididcom modo nunc vel purusesfher commodo
                  nunc vel purus
                </p>

                <h4 className="content-title mb-0">Our Support Facility</h4>
                <p className="des mb-0">
                  We help businesses elevate the alue there is custom software
                  ent apor incididunt ut labore et dolore magna.
                </p>
                <div className="about-role">
                  <ul className="about-ul">
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/8.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Fresh fish</h4>
                          <p>
                            We’ll help you test ld new ideas while sharing your.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="serv-list">
                        <img src="img/icon/9.png" alt="Image not found" />
                        <div className="list-des">
                          <h4 className="list-title">Rating Star</h4>
                          <p>
                            We’ll help you test ld new ideas while sharing your.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="about-2-button mt-25">
                  <Link href="/about" className="custom-btn">
                    About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
