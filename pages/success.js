import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runSchoolPride } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect (() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runSchoolPride();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2> Thank Your For Your Purchase See You Soon! </h2>
        <p className="email-msg">
          Check your Email for Purchase Details and Receipt.
        </p>
        <p className="description">
          If you have any questions regarding your order, Pls Email
          <a className="email" href="mailto:estore@example.com">
            estore@example.com
          </a>
        </p>
        <Link href="/">
            <button
                type="button"
                width = "300px"
                className="btn"
            >
                Continue Shopping
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
