import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";

const AddtoCart = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <div>
      <Link to="/mycart" onClick={() => addToCart()}>
        ADD TO CART
      </Link>
    </div>
  );
};

export default AddtoCart;