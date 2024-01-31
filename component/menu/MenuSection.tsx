"use client";
import { useCafeuContext } from "@/context/CafeuContext";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { redDonarApi } from "./Api";
import Pricing from "@/app/pricing/page";
import { filterHTML } from "@/lib/util";

const MenuSection = () => {
  const {
    activeMenuTab,
    handleMenuTabChange,
    filteredMenuProductList1,
    addToCart,
    addToWishlist,
    wishlist,
  } = useCafeuContext();
  const [menuProduct, setMenuProduct] = useState<any>([]);

  const debounce = (func: any, delay: any) => {
    let timeout: any;
    return function (...args: any) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    // Define moreProductsAvailable and additionalProducts based on your logic
    if (
      scrollTop + clientHeight >= scrollHeight - 5 &&
      filteredMenuProductList1
    ) {
      setMenuProduct((prevProducts: any) => [
        ...prevProducts,
        ...filteredMenuProductList1,
      ]);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 200); // Adjust the delay as needed

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [menuProduct]);

  return (
    <section>
      <div className='all-product all-product-1 menu-section-container'>
        <div className='product-inner cpy-8'>
          <div className='container'>
            <div className='row'>
              <div className='section-head text-center'>
                <span className='sm-title '>Special Menu</span>
                <h2 className='sec-title'>Our Specials Menu</h2>
                <div className='product-cat mb-40'>
                  <div className='controls'>
                    <Nav
                      className='cat-menu justify-content-center home-1-menu-section'
                      activeKey={activeMenuTab}
                      onSelect={handleMenuTabChange}
                    >
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li ' eventKey='all'>
                          <img
                            src='img/category/icon/7.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>All</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li ' eventKey='pizza'>
                          <img
                            src='img/category/icon/1.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Value Deals</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='asian'>
                          <img
                            src='img/category/icon/2.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Pizza</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='burger'>
                          <img
                            src='img/category/icon/3.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Special Pizza</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='salad'>
                          <img
                            src='img/category/icon/4.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Side Lines</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='bakery'>
                          <img
                            src='img/category/icon/5.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Dips</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='cat-menu-li' eventKey='drink'>
                          <img
                            src='img/category/icon/6.png'
                            alt=''
                            className='cat-icon'
                          />
                          <span className='cat-name'>Desserts</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <div className='row' data-aos='fade-up' data-aos-duration='1000'>
              {menuProduct.map((item: any) => (
                <div
                  className={`col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4 mix ${item.CategoryId}`}
                  key={item.ItemId}
                >
                  <div className='product-card'>
                    <div className='product-img'>
                      <Link href='/shop'>
                        <img
                          src={`https://reddonerandpizzas.hubsolutions.pk/${item.ItemImage}`}
                          alt='image not found'
                        />
                      </Link>
                    </div>
                    <div className='product-details'>
                      <Link
                        href={`/shop/${item.Slug}`}
                        className='product-name'
                      >
                        {item.ItemTitle}
                      </Link>
                      <p className='product-sm-des'>
                        {filterHTML(item.ItemDetail)}
                      </p>
                      <div className='cart-price-wishlist'>
                        <p className='delivery-text'>Price $ {item.Price}</p>
                        <div className='cart-wishlist'>
                          <a
                            className={`sm-custom-btn wishlist-btn ${
                              wishlist.some(
                                (wishlistItem) =>
                                  wishlistItem.ItemId === item.ItemId
                              )
                                ? "active"
                                : ""
                            }`}
                            role='button'
                            onClick={() => addToWishlist(item.ItemId)}
                          >
                            <span className='icofont-plus'></span>
                          </a>
                          <a
                            className='sm-custom-btn cart-btn'
                            role='button'
                            onClick={() => addToCart(item.ItemId)}
                          >
                            <span className='icofont-cart-alt'></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <p className='product-price'>${item.Price}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
