import React from "react";
import SearchForm from "../form/SearchForm";

const BannerSection3 = () => {
  return (
    <section>
      <div
        className="banner banner-3 hero-area4 height-955 pt-270 pb-270"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <span
                className="hero-sub-title"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Fastest Delivery Guaranteed
              </span>
              <h2
                className="hero4-title"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Free Home Delivery Within an Hour
              </h2>
              <SearchForm/>
              <span
                className="hero-trending-wrap"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <strong>Trending:</strong>
                <span className="hero-trending-text">
                  Sushi Burger Chinese Pizza
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
