import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { FaTrash } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";
import AmountButtons from "./AmountButtons";

const CartCard = ({ image, name, price, _id, size, amount, color, vendor }) => {
  const { removeItem, toggleAmount, total_amount } = useCartContext();

  const increase = () => {
    toggleAmount(_id, "inc");
  };
  const decrease = () => {
    toggleAmount(_id, "dec");
  };
  return (
    <>
      <section className="card_section">
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
                <p>{size}</p>
                <p>{size}</p>
              </div>
              {/* <div className="cloth_Details">
                <p>{grade}</p>
                <p>{clothGrade}</p>
              </div> */}
              <div className="cloth_Details">
                <p>{color}</p>
                <p>{color}</p>
              </div>
              {/* <div className="cloth_Details">
                <p>{type}</p>
                <p>{clothType}</p>
              </div> */}
              <div className="cloth_Details">
                <p>{vendor}</p>
                <p></p>
              </div>
              <div className="cloth_Details">
                <p>{price}</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <button
            className="removeItems"
            type="button"
            onClick={() => removeItem(_id)}
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

        <div className="cartSummary">
          <div>
            <h2>Cart Summary</h2>
            <div className="summary_Details">
              <p>{name}</p>
              <p>{price}</p>
            </div>
            <div className="subtotal_Details">
              <p>SubTotal</p>
              <p>{total_amount}</p>
            </div>
            <div>
              <button type="submit" id="waitlist-btn" className="waitlist-btn">
                <Link to="/delivery">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartCard;
