"use client";
//import { signIn, useSession } from "next-auth/react";
import NavLink from "./NavLink";
import { useCafeuContext } from "@/context/CafeuContext";
import Spinner from "react-bootstrap/Spinner";
//import { userType } from "@/types/user";
//import toast from "react-hot-toast";
//import { loginJWT } from "@/lib/auth";
//import useRefreshToken from "@/hooks/useRefreshToken";
import Link from "next/link";

// import toast from 'react-hot-toast';

const NavigationSection = () => {
  // const { CURRENT_DAY, wishlist } = useCafeuContext();
  // const { data: session, status } = useSession();
  //const refresh = useRefreshToken();

  return (
    <nav className='cf-header-menu' id='header-menu'>
      <ul>
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
        {/* <li className="has-submenu"> */}
        <li>
          <NavLink href='/menu'>Menu</NavLink>
          {/* <ul className="submenu">
            <li>
              <NavLink href="/menu/value-deals">Value Deals</NavLink>
            </li>
            <li>
              <NavLink href="/menu/pizza">Pizza</NavLink>
            </li>
            <li>
              <NavLink href="/menu/special-pizza">Special Pizza</NavLink>
            </li>
            <li>
              <NavLink href="/menu/sidelines">Sidelines</NavLink>
            </li>
            <li>
              <NavLink href="/menu/dips">Dips</NavLink>
            </li>
            <li>
              <NavLink href="/menu/desserts">Desserts</NavLink>
            </li>
            <li>
              <NavLink href="/menu/quenchers">Quenchers</NavLink>
            </li>
            <li>
              <NavLink href={`/menu/thrilling-${CURRENT_DAY}`}>
                Thrilling {CURRENT_DAY}
              </NavLink>
            </li>
          </ul> */}
        </li>
        <li>
          <NavLink href='/about'>About Us</NavLink>
        </li>
        {/* <li>
          <NavLink href='/user'>User dashboard</NavLink>
        </li> */}
        <li>
          <NavLink href='/contact'>Contact</NavLink>
        </li>
        {/* <li>
          <NavLink href="/dummy">Dummy Page</NavLink>
        </li> */}
        {/* {wishlist.length > 0 && (
          <li data-aos="zoom-in">
            <NavLink href="/wishlist">Wishlist</NavLink>
          </li>
        )} */}
        {/* <li>
          <NavLink href='/reservation'>Reserve Table</NavLink>
        </li> */}
        <li>
          {/* {status === 'loading' ? (
            <Spinner animation="border" size="sm" variant="secondary" />
          ) : status === 'authenticated' ? (
            `${userObject.UserName}`
          ) : (
            // <NavLink onClick={() => signIn()} href="#">
            //   Signin
            // </NavLink> */}
          {/* <NavLink onClick={() => refresh()} href="#">
            Signin
          </NavLink> */}
          {/* )} */}
        </li>
        {/* <li
          onClick={() =>
            toast.success('Successfully toasted!', { duration: 6000 })
          }
        >
          <NavLink href="#">Toast</NavLink>
        </li>
        <li onClick={() => toast.loading('Loading...')}>
          <NavLink href="#">Loading</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavigationSection;
