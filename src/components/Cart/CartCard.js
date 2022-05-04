import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { FaTrash } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";
import AmountButtons from "./AmountButtons";
import { useUserContext } from "../../context/user_context";

const CartCard = ({
  image,
  name,
  price,
  id,
  // _id,
  size,
  amount,
  color,
  grade,
  type,
}) => {
  const { cart, removeItem, toggleAmount, total_amount } = useCartContext();
  const { deliveryDetails, deliveryStatus } = useUserContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <>
      <div className="card_section">
        <div className="card_row">
          <div className="cartImg">
            <img src={image} alt={name} />
          </div>
          <div className="cart_details">
            <div className="cartTitle">
              <h2>{name}</h2>
              <p>{price}</p>
            </div>
            <div className="card_details">
              <div className="cloth_Details">
                <p>Size:</p>
                <p>{size}</p>
              </div>
              <div className="cloth_Details">
                <p>Grade:</p>
                <p>{grade}</p>
              </div>
              <div className="cloth_Details">
                <p>Color:</p>
                <p>{color}</p>
              </div>
              <div className="cloth_Details">
                <p>Type:</p>
                <p>{type}</p>
              </div>
              {/* <div className="cloth_Details">
                <p>Vendor:</p>
                <p>{vendorName}</p>
              </div> */}
              <div className="cloth_Details">
                <p>Price</p>
                <p>{price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <button
            className="removeItems"
            type="button"
            onClick={() => removeItem(id)}
          >
            <FaTrash className="card_icon" />
            <p>Remove</p>
          </button>
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>
      </div>
    </>
  );
};

export default CartCard;
