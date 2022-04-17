import React from "react";
import shorts from "../../assets/user/shorts.png";
import shirt from "../../assets/user/shirt.png";

const PendingOrders = () => {
  return (
    <div className="user__account-details">
      <div className="user__details-container">
        <div className="user__order-image">
          <img src={shorts} alt="" />
        </div>
        <div>
          <p className="user__order-title">BLACK SHORTS</p>
          <span className="user__order-unit">
            <p>Unit: 1</p>
            <p>NGN 3,500</p>
          </span>
          <span className="user__order-span">ORDER IN PROGRESS</span>

          <p>Friday, April 20, 2022</p>
        </div>
        <button className="user__edit-btn">SEE ORDER HISTORY</button>
      </div>
    </div>
  );
};

export default PendingOrders;
