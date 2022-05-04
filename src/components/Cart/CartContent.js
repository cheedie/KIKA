import React from "react";
import { useCartContext } from "../../context/cart_context";
import "../../styles/CartStyles/MyCart.css";
import { Link } from "react-router-dom";
import CartCard from "../Cart/CartCard";

const CartContent = () => {
  const { cart, total_amount } = useCartContext();

  return (
    <div>
      <div
        className="cart_container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button type="button" id="cart-btn" className="cart-btn">
          <Link to="/products">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default CartContent;
