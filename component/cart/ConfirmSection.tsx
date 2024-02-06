"use client";
import React from "react";
import ProductTable from "../table/ProductTable";
import CouponSection from "./CouponSection";
import { useCafeuContext } from "@/context/CafeuContext";
import ConfirmTable from "../table/CofirmTale";

const ConfirmSection = () => {
  const { cart, removeFromCart } = useCafeuContext();
  return (
    <>
      <ConfirmTable array={cart} removeItem={removeFromCart} cartTable={true} />
      <CouponSection />
    </>
  );
};

export default ConfirmSection;
