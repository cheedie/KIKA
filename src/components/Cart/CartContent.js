import React from "react";
import { useCartContext } from "../../context/cart_context";
import "../../styles/CartStyles/MyCart.css";
import {Link} from "react-router-dom";
import CartCard from "../Cart/CartCard";

const CartContent = () => {
  const { cart, total_amount } = useCartContext();

  return (
    <div className="cart_container">
      <div className="card">
        {cart.map((item) => {
          return <CartCard {...item} key={item.id} />;
        })}
      </div>

      <div className="cartSummary">
        <div>
          <h3>Cart Summary</h3>
          {cart.map((item) => {
            return (
              <div className="summary_Details" key={item.id}>
                <img src={item.image} alt="" />
                <div className="summary_Detail">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            );
          })}
          <div className="subtotal_Details">
            <p>SubTotal</p>
            <p>{total_amount}</p>
          </div>

          <button type="submit" id="cart-btn" className="cart-btn">
            <Link to="/delivery">Checkout</Link>
          </button>
        </div>
      </div>
      <button type="button" id="cart-btn" className="cart-btn">
            <Link to="/products">Continue Shopping</Link>
          </button>
    </div>
  );
};

export default CartContent;
