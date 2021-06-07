import React from "react";
import CartDisplayerProduct from "./CartDisplayerProduct";
import SumCart from "./SumCart";

const CartDisplayer = () => {
  return (
    <div>
      <CartDisplayerProduct />
      <SumCart />
    </div>
  );
};

export default CartDisplayer;
