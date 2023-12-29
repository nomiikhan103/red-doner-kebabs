"use client";
import React from "react";
import NavigationSection from "../navigation/NavigationSection";
import { useCafeuContext } from "@/context/CafeuContext";
import Link from "next/link";
import DropdownCartSection from "../cart/DropdownCartSection";
interface HeaderProp {
  logo: string;
  theme: string;
}
const Header2: React.FC<HeaderProp> = ({ logo, theme }) => {
  const { openSearchbarModal, isHeaderFixed, cartItemAmount, openSidebar } =
    useCafeuContext();

  return (
    <header>
      <div
        className={`header header-2 ${theme} ${
          isHeaderFixed ? "navbar-fixed" : ""
        }`}
      >
        <div className='container'>
          <div className='header-inner second-home-nav'>
            <div className='logo'>
              <Link href='/'>
                <img src={logo} alt='Logo not found' className='logo-img' />
              </Link>
            </div>
            <div className='header-right'>
              <div className='header-menu d-none d-lg-block'>
                <NavigationSection />
              </div>
              <div className='right-menu-icon'>
                <ul className='d-flex align-items-center'>
                  <li className='nav-list'>
                    <a
                      className='nav-link icon-item'
                      id='search'
                      role='button'
                      onClick={openSearchbarModal}
                    >
                      <span className='icofont-search-1'></span>
                    </a>
                  </li>
                  <li className='nav-list'>
                    <a className='nav-link icon-item'>
                      <span className='icofont-shopping-cart'>
                        {" "}
                        <span className='cart-count'>{cartItemAmount}</span>
                      </span>
                    </a>
                    <DropdownCartSection />
                  </li>
                  <li className='nav-list'>
                    <Link href='/my-account' className='nav-link icon-item'>
                      <span className='icofont-ui-user'></span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='d-lg-none dr-navbar-mobile-sign side-toggle'>
                <div className='dr-navbar-sign menu-tab' onClick={openSidebar}>
                  <span className='dr-line-1'></span>
                  <span className='dr-line-2'></span>
                  <span className='dr-line-3'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
