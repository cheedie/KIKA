import React from "react";
import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";

const AmountButtons = () => {
  return (
    <div className="increaseItems">
      <FaMinusCircle className="card_icon" />
      <p> 1 </p>
      <FaPlusCircle className="card_icon" />
    </div>
  );
};

export default AmountButtons;
