import React from "react";
import shorts from "../../assets/user/shorts.png";

import { useCartContext } from "../../context/cart_context";

const PendingOrders = () => {
  const {
    cart,
    total_amount,
    shipping_fee,
    tax,
    total_items,
  } = useCartContext();

  return (
    <div className="user__account-details">
      <div className="user__details-container">
        {cart.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="user__order-image">
                <img src={item.image} alt="" />
              </div>

              <div>
                <p className="user__order-title">{item.name}</p>
                <span className="user__order-unit">
                  <p>Unit: </p>
                  <p>NGN {total_amount}</p>
                </span>
                <span className="user__order-span">ORDER IN PROGRESS</span>

                <p>Friday, April 20, 2022</p>
              </div>
              <button className="user__edit-btn">SEE ORDER HISTORY</button>
            </React.Fragment>
          );
        })}
        )
      </div>
    </div>
  );
};

export default PendingOrders;
