import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../../assets/user/Cart.png";

const EmptyOrder = () => {
  return (
    <div>
      <img src={cartImg} alt="empty cart" />
      <Link to="/" className="">
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyOrder;
