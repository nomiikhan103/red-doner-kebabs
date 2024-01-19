"use client";
import { useCafeuContext } from "@/context/CafeuContext";
import Link from "next/link";
import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
const DropdownCartSection = () => {
  const { cart, removeFromCart } = useCafeuContext();
  return (
    <OverlayScrollbarsComponent className='cart-menu'>
      <ul className='cart-ul'>
        {cart.length === 0 ? (
          <div className='no-product-cart-dropdown-container'>
            <p className='no-product-dropdown-text'>No Product In Cart</p>
            <Link href='/shop' className='custom-btn'>
              Add Products
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <li className='cart-list' key={item.ItemId}>
              <div className='d-flex align-items-center'>
                <div className='cart-img'>
                  <img
                    src={`https://navankebabs.com//${item.ItemImage}`}
                    alt={item.ItemTitle}
                  />
                </div>
                <div className='cart-product-details'>
                  <Link
                    href={`/shop/${item.Slug}`}
                    className='product-name cart-px-name'
                  >
                    {item.ItemTitle}
                  </Link>
                  <p className='price'>${item.Price}</p>
                </div>
              </div>
              <a
                className='remove-icon'
                role='button'
                onClick={() => removeFromCart(item.ItemId)}
              >
                <span className='icofont-ui-delete'></span>
              </a>
            </li>
          ))
        )}
      </ul>
      <div className='cart-modal-btn'>
        <Link href='/wishlist' className='custom-btn'>
          Wishlist
        </Link>
        <Link href='/cart' className='custom-btn'>
          Cart
        </Link>
      </div>
    </OverlayScrollbarsComponent>
  );
};

export default DropdownCartSection;
