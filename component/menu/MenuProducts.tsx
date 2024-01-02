"use client";
import { useCafeuContext } from "@/context/CafeuContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

interface MenuProps {
  style: string;
  showMoreBtn: boolean;
  endIndex: number;
}
const MenuProducts: React.FC<MenuProps> = ({
  style,
  showMoreBtn,
  endIndex,
}) => {
  const {
    activeMenuProductTab,
    handleMenuProductTabChange,
    filteredMenuProductList,
    addToWishlist,
    addToCart,
    openLightBoxModal,
    handleMenuShowMore,
    handleMenuShowLess,
    wishlist,
  } = useCafeuContext();
  const menuProductItems = filteredMenuProductList.slice(0, 94);

  return (
    <section>
      <div className={`product ${style} cpy-8`}>
        <div className='container'>
          <div className='product-inner'>
            <div className='row'>
              <div
                className='section-head text-center'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                <span className='sm-title '>Special Menuzz</span>
                <h2 className='sec-title'>Our Specials Menu</h2>
                <div
                  className='product-cat '
                  data-aos='fade-up'
                  data-aos-duration='1500'
                >
                  <div className='controls'>
                    <Nav
                      className='cat-menu justify-content-center'
                      activeKey={activeMenuProductTab}
                      onSelect={handleMenuProductTabChange}
                    >
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='all'>
                          <span className='cat-name'>All Categories</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='perch-fish'>
                          <span className='cat-name'>Perch Fish</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='lobster'>
                          <span className='cat-name'>Lobster</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='shrimps'>
                          <span className='cat-name'>Shrimps</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='red_crab'>
                          <span className='cat-name'>Red Crab</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='describe-content mt-50'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='all-product'>
                <div className='row justify-content-center'>
                  {menuProductItems.map((item) => (
                    <div
                      className={`col-md-6 col-xl-3 col-lg-4 col-sm-6 mb-4 mix ${item.CategoryId}`}
                      key={item.ItemId}
                    >
                      <div className='product-card'>
                        {item.status && <p className='status-product'>New</p>}
                        <div className='product-img'>
                          <Link href={`/shop/${item.Slug}`}>
                            <img
                              src={`https://navankebabs.com//${item.ItemImage}`}
                              alt={item.ItemTitle}
                            />
                          </Link>
                        </div>
                        <div className='product-details'>
                          <div className='d-flex justify-content-between'>
                            <Link
                              href={`/shop/€{item.slug}`}
                              className='product-name'
                            >
                              {item.ItemTitle}
                            </Link>
                            <a>
                              <i className='icofont-heart-alt'></i>
                            </a>
                          </div>
                          {/* <ul className='rating'>
                            <li>
                              {" "}
                              <span className='icofont-ui-rating'></span>
                            </li>
                            <li>
                              {" "}
                              <span className='icofont-ui-rating'></span>
                            </li>
                            <li>
                              {" "}
                              <span className='icofont-ui-rating'></span>
                            </li>
                            <li>
                              {" "}
                              <span className='icofont-ui-rating'></span>
                            </li>
                            <li>
                              {" "}
                              <span
                                className={`icofont-ui-rating ${
                                  item.rating ? item.rating : ""
                                }`}
                              ></span>
                            </li>
                          </ul> */}
                          <p className='text-dark text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc tellus turpis
                          </p>

                          <p className='price '>{item.TotalPrice}</p>

                          <ul className='pd-btn-group'>
                            {/* <li>
                              <a
                                role='button'
                                onClick={() => addToWishlist(item.id)}
                                className={`shop-btn ${
                                  wishlist.some(
                                    (wishlistItem) =>
                                      wishlistItem.id === item.id
                                  )
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <span className='icofont-heart-alt'></span>
                              </a>
                            </li> */}

                            <li>
                              <a
                                className='shop-btn'
                                role='button'
                                onClick={() => openLightBoxModal(item)}
                              >
                                <span className='icofont-shopping-cart px-1'></span>
                                Add to card
                              </a>
                            </li>
                            {/* <li>
                              <a
                                className='shop-btn'
                                role='button'
                                onClick={() => openLightBoxModal(item)}
                              >
                                <span className='icofont-eye'></span>
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* {showMoreBtn && (
                <div className='row'>
                  <div className='text-center my-4'>
                    {menuProductItems.length === 8 ? (
                      <a
                        className='custom-btn'
                        role='button'
                        onClick={handleMenuShowMore}
                      >
                        Show More
                      </a>
                    ) : menuProductItems.length > 8 ? (
                      <a
                        className='custom-btn'
                        role='button'
                        onClick={handleMenuShowLess}
                      >
                        Show Less
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuProducts;
