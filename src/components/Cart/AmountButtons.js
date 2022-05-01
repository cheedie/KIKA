import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="increaseItems">
      <button onClick={decrease}>
        <FaMinusCircle className="card_icon" />
      </button>
      <p>{amount}</p>
      <button>
        <FaPlusCircle className="card_icon" onClick={increase} />
      </button>
    </div>
  );
};

export default AmountButtons;
