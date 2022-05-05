import React from "react";
import EmptyCartImg from "../../assets/cart/Empty_cart_p.png";
import "../../styles/CartStyles/EmptyCart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";

const PendingOrders = () => {
  const {
    cart,
    total_amount,
    shipping_fee,
    tax,
    total_items,
  } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className="emptyCart_section">
        <div className="cart_empty">
          <img src={EmptyCartImg} alt="Empty_cart_image" />
        </div>
        <h3 className="error_title">Your cart is empty</h3>
        <p>
          Browse through our various categories and discover <br /> the best
          thrifted wears you can get
        </p>

        <div className="empty___btn">
          <button className="empty__cart__btn">
            <Link to="/products">Start Shopping</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="user__account-details">
              <div className="user__details-container">
                <div className="user__order-image">
                  <img src={item.image} alt="" />
                </div>

                <div>
                  <p className="user__order-title">{item.name}</p>
                  <span className="user__order-unit">
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Unit: {item.amount}{" "}
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      NGN {item.price}
                    </p>
                  </span>
                  <span className="user__order-span">ORDER IN PROGRESS</span>

                  <p>Tuesday, April 10, 2022</p>
                </div>
                <button className="user__edit-btn">SEE ORDER HISTORY</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      )
    </>
  );
};

export default PendingOrders;
