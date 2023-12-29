import React from "react";
interface SocialProps {
  style: string;
}
const SocialSection: React.FC<SocialProps> = ({ style }) => {
  return (
    <div className={`social-sec ${style}`}>
      <div className='right-social'>
        <ul className='right-social-ul'>
          {/* <li>
            <a
              href='https://www.facebook.com/people/Red-Doner-Pizzas/100064940353055/?locale=es_ES&paipv=0&eav=AfbRtnyJb0x8wJWF_o05Hq_WctezHUO6mgmwvJ-pl78ioXtHEIi_ViTslOULzhhFhrw&_rdr'
              className='share-link'
              target='_blank'
            >
              Facebook
            </a>
          </li> */}

          {/* <li>
            <a href='#' className='share-link'>
              Twitter
            </a>
          </li> */}

          {/* <li>
            <a href='#' className='share-link'>
              Instagram
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SocialSection;
