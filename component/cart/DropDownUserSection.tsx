"use client";
import React from "react";
import Link from "next/link";
// import { useSession } from 'next-auth/react';
import "./dropdown-user-section.scss";

const DropdownUserSection = () => {
  // const { data: session, status } = useSession();

  return (
    <div className='cart-menu user-dropdown-menu'>
      {/* {status === 'loading' ? (
        <div className="no-product-cart-dropdown-container">
          <p className="no-product-dropdown-text">
            <Spinner />
          </p>
        </div>
      ) : status === 'unauthenticated' ? (
        <> */}
      <ul className='cart-ul'>
        {/* <div className="d-flex align-items-center"> */}
        {/* <a href={`/my-account/signin`}>
          <li className='cart-list'>Signin</li>
        </a> */}

        <Link href={`/my-account/signin`}>
          <li className='cart-list'>Signin</li>
        </Link>
        {/* </div> */}
        <Link href={`/my-account/signup`}>
          <li className='cart-list'>Signup</li>
        </Link>
      </ul>
      {/* </>
      ) : (
        <>
          <ul className="cart-ul">
            <Link href={`/my-account`}>
              <li className="cart-list">My account</li>
            </Link>
            <li
              className="cart-list"
              onClick={() =>
                signOut({
                  callbackUrl: '/',
                })
              }
            >
              Logout
            </li>
          </ul>
        </>
      )} */}
    </div>
  );
};

export default DropdownUserSection;
