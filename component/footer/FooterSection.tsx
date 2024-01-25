import { useCafeuContext } from "@/context/CafeuContext";
import Link from "next/link";
import React from "react";
import SubscribeForm from "../form/SubscribeForm";
interface FooterProp {
  style: string;
}
const FooterSection: React.FC<FooterProp> = ({ style }) => {
  const { currentYear } = useCafeuContext();
  return (
    <footer>
      <div
        className={`footer-section ${style}`}
        data-background='/img/footer-bg.png'
      >
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-5 col-md-6 col-sm-6 my-2 smpadright40'
              data-aos='fade-up'
              data-aos-duration='500'
            >
              <div className='footer-content-wrapper'>
                <div className='footer-logo mb-1'>
                  <img
                    src='/img/logo/redkebab.png'
                    style={{ width: "23%" }}
                    alt=''
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit consectetur, ame adipiscing elit, sed do
                </p>
                <ul className='address'>
                  <li>
                    <span className='icofont-ui-call'> </span>
                    <div className='address-inner'>
                      <p className='address-info'>
                        <a href='tel:+123456679123'>+34952443505</a>
                      </p>
                      {/* <p className='address-info'>
                        <a href='tel:+123456789'>+123 456 789</a>
                      </p> */}
                    </div>
                  </li>

                  <li>
                    <span className='icofont-email'></span>
                    <div className='address-inner'>
                      <p className='address-info'>
                        <a href='mailto:nfo@example.com'>
                          {" "}
                          megeul_85@hotmail.com{" "}
                        </a>
                      </p>
                      {/* <p className='address-info'>
                        <a href='mailto:test@example.com'>test@example.com</a>
                      </p> */}
                    </div>
                  </li>

                  <li>
                    <span className='icofont-location-pin'></span>
                    <p className='address-info'>
                      Avda Gamonal 5. local 2 Arroyo de la miel , Benalmádena,
                      Spain, 29630
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div
              className='col-lg-3 col-md-6 col-sm-6 my-2 padleft40'
              data-aos='fade-up'
              data-aos-duration='500'
            >
              <div className='footer-content-wrapper'>
                <div className='footer-sec-head mb-4'>
                  <h4 className='footer-widget-title'>Quick links</h4>
                </div>
                <ul className='qu-link'>
                  <li className='foot-list'>
                    <Link href='/about' className='footer-link'>
                      About Us
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/menu' className='footer-link'>
                      Menu
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/blog' className='footer-link'>
                      Blogs
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/faq' className='footer-link'>
                      FAQ
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/service' className='footer-link'>
                      Service
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/gallery' className='footer-link'>
                      Gallery
                    </Link>
                  </li>
                  <li className='foot-list'>
                    <Link href='/contact' className='footer-link'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div
              className='col-lg-3 col-md-6 col-sm-6 my-2 padright40'
              data-aos='fade-up'
              data-aos-duration='500'
            >
              <div className='footer-content-wrapper'>
                <div className='footer-sec-head mb-4'>
                  <h4 className='footer-widget-title'>Facebook</h4>
                </div>
                <ul className='insta-feed'>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/restaurant.png' alt='' />
                    </a>
                  </li>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/pizza.jpg' alt='' />
                    </a>
                  </li>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/2.jpg' alt='' />
                    </a>
                  </li>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/3.jpg' alt='' />
                    </a>
                  </li>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/4.jpg' alt='' />
                    </a>
                  </li>
                  <li className='foot-list'>
                    <a
                      href='https://www.facebook.com/profile.php?id=100064940353055&sk=about&locale=es_ES'
                      className='footer-link'
                    >
                      <img src='/img/instagram/5.jpg' alt='' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className='col-lg-4 col-md-6 col-sm-6 my-2'
              data-aos='fade-up'
              data-aos-duration='500'
            >
              <div className='footer-content-wrapper'>
                <div className='footer-sec-head mb-4'>
                  <h4 className='footer-widget-title'>Subscribe</h4>
                </div>

                <p className='subscribe-des'>
                  Lorem ipsum dolor si consectetur adipisicing elit, sed
                  eiusmotempor incididunt ut labore et
                </p>

                <SubscribeForm
                  margin='input-group mb-3'
                  inputStyle='form-control subscribtion-input'
                  footer={true}
                />
                <ul className='social-ul'>
                  <li className='social-list'>
                    <a
                      href='https://www.facebook.com/people/Red-Doner-Pizzas/100064940353055/?locale=es_ES&paipv=0&eav=AfbRtnyJb0x8wJWF_o05Hq_WctezHUO6mgmwvJ-pl78ioXtHEIi_ViTslOULzhhFhrw&_rdr'
                      className='social-link'
                      target='_blank'
                    >
                      <span className='icofont-facebook'></span>
                    </a>
                  </li>

                  {/* <li className='social-list'>
                    <a href='#' className='social-link'>
                      <span className='icofont-twitter'></span>
                    </a>
                  </li> */}

                  {/* <li className='social-list'>
                    <a href='#' className='social-link'>
                      <span className='icofont-skype'></span>
                    </a>
                  </li> */}

                  {/* <li className='social-list'>
                    <a href='#' className='social-link'>
                      <span className='icofont-instagram'></span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='last-footer'>
          <div className='container'>
            <div className='row'>
              <div className='text-center'>
                <p className='copyright-text'>
                  Made by Hub Solutions {currentYear}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
