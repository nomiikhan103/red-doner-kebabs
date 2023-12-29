"use client";
import { useCafeuContext } from "@/context/CafeuContext";
import React from "react";
import { Nav } from "react-bootstrap";
interface GalleryProps {
  theme: string;
  showBtn: boolean;
  endIndex: number;
}
const GallerySection: React.FC<GalleryProps> = ({
  theme,
  showBtn,
  endIndex,
}) => {
  const {
    activeGalleryTab,
    handleGalleryTabChange,
    filteredGalleryItemList,
    handleGalleryShowMore,
    handleGalleryShowLess,
  } = useCafeuContext();
  const galleryItemList = filteredGalleryItemList.slice(0, endIndex);
  return (
    <section>
      <div className={`all-product product-3 ${theme} cpy-6`}>
        <div className='product-inner'>
          <div className='container'>
            <div className='row'>
              <div
                className='section-head text-center'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <span className='sm-title '>Our Gallery</span>
                <h2 className='sec-title'> Food Gallery</h2>
                <div
                  className='product-cat'
                  data-aos='fade-up'
                  data-aos-duration='500'
                >
                  <div className='controls'>
                    <Nav
                      activeKey={activeGalleryTab}
                      onSelect={handleGalleryTabChange}
                      className='cat-menu justify-content-center'
                    >
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li ' eventKey='all'>
                          <span className='cat-name'>All</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li ' eventKey='pizza'>
                          <span className='cat-name'>Menus Kebab</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='asian'>
                          <span className='cat-name'>Kebab Solo</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='burger'>
                          <span className='cat-name'>Add-ons</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='salad'>
                          <span className='cat-name'>Salads</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='bakery'>
                          <span className='cat-name'>Lasagna</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='row mt-40'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              {galleryItemList.map((item) => (
                <div
                  className='col-xl-3 col-md-4 col-sm-6 col-12 p-0 mix'
                  key={item.id}
                >
                  <div className='product-card'>
                    <div className='product-img product-gallery-img-container'>
                      <img src={item.imgSrc} alt='image not found' />
                    </div>
                    <div className='view-project'>
                      <div className=''>
                        <a
                          href={`/gallery/${item.slug}`}
                          className='project-title'
                        >
                          {item.title}
                        </a>

                        <p>Project Category</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showBtn && (
              <div className='row'>
                <div className='text-center my-4'>
                  {galleryItemList.length === 8 ? (
                    <a
                      className='custom-btn'
                      role='button'
                      onClick={handleGalleryShowMore}
                    >
                      Show More
                    </a>
                  ) : galleryItemList.length > 8 ? (
                    <a
                      className='custom-btn'
                      role='button'
                      onClick={handleGalleryShowLess}
                    >
                      Show Less
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
