import React from "react";
interface GaleryDataProps {
    galleryData: {
        imgSrc:string,
        longTitle:string,
    }
}
const GalleryDetailSection:React.FC<GaleryDataProps> = ({galleryData}) => {
  return (
    <section>
      <div className="service-details pt-105 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-info">
                <div
                  className="service-details-img mb-30"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={`/${galleryData.imgSrc}`} alt="Image not Found" />
                </div>

                <div className="service-content">
                  <div
                    className="mb-35"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h2 className="service-heding my-3">
                      {galleryData.longTitle}
                    </h2>

                    <p className="service-des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Qui ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel
                      facilisis.Lorem ipsum dolor sit amet, consecteturg
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse
                      ultrices gravida. Risuss commodo viverra maecenas accumsan
                      lacus vel facilisis.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmodgdt tempor
                      incididunt ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                      maecenasaaf accumsan lacus vel facilisis.Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididu dolore magna aliqua. Quis ipsum
                      suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus
                    </p>
                  </div>
                  <div className="row">
                    <div
                      className="col-md-6 mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="post-inner-img ">
                        <img src="/img/blog/10.png" alt="Image not found" />
                      </div>
                    </div>
                    <div
                      className="col-md-6 mb-30"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="h-100 align-items-center d-flex">
                        <div className="image-content my-3">
                          <p className="service-des">
                            Lorem ipsum dolor sit amet, consectetur adipising
                            elit, sed do eiusmod tempor incididunt ulabore et
                            dolore magna aliqua. Quis ipsum Lorem ipsum dolor
                            sit amet, consectetur adipising
                          </p>
                          <p className="service-des my-3">
                            Lorem ipsum dolor sit amet, consectetur adipising
                            elit, sed do eiusmod tempor incididunt ulabore et
                            dolore magna aliqua. Quis ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="service-inner-content mb-40"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h4 className="service-heding mb-20">
                      Special Occasions to our Restaurant
                    </h4>

                    <p className="service-des">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accums lacus vel facilisis. rorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididun labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service-right-bar pl-20">
                <div
                  className="service-right-bar"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="personal-info mt-0 mb-50">
                    <div className="team-sec-title">
                      <h4 className="card-title">Personal Info</h4>
                    </div>
                    <div className="team-info">
                      <table className="table table-borderless mb-0">
                        <tbody>
                        <tr>
                          <td className="ps-0">Phone:</td>
                          <td>+(123)4567890</td>
                        </tr>
                        <tr>
                          <td className="ps-0">Office:</td>
                          <td>+(123)4567890</td>
                        </tr>

                        <tr>
                          <td className="ps-0">E-mail:</td>
                          <td>test@example.com</td>
                        </tr>
                        <tr>
                          <td className="ps-0">Gender:</td>
                          <td>Male</td>
                        </tr>
                        </tbody>
                      </table>
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

export default GalleryDetailSection;
