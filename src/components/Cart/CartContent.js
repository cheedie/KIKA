import React from "react";
import { useCartContext } from "../../context/cart_context";
import "../../styles/CartStyles/MyCart.css";

import CartCard from "../Cart/CartCard";

const CartContent = () => {
  const { cart } = useCartContext();

  return (
    <div className="cart_container">
      <div className="card">
        {cart.map((item) => {
          return <CartCard {...item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default CartContent;
