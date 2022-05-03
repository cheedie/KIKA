import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import "../../styles/product/addToCart.scss";

const AddtoCart = ({ product }) => {
  const { addToCart } = useCartContext();
  // const { countInStock } = product;
  const [amount, setAmount] = useState(1);
  // const increase = () => {
  //   setAmount((oldAmount) => {
  //     let tempAmount = oldAmount + 1;
  // if (tempAmount > countInStock) {
  //   tempAmount = countInStock;
  // }
  //     return tempAmount;
  //   });
  // };
  // const decrease = () => {
  //   setAmount((oldAmount) => {
  //     let tempAmount = oldAmount - 1;
  // if (tempAmount < 1) {
  //   tempAmount = 1;
  // }
  //     return tempAmount;
  //   });
  // };

  return (
    <div className="addToCart__button">
      {/*<AmountButtons amount={amount} increase={increase} decrease={decrease} />*/}
      <Link to="/mycart" onClick={() => addToCart(amount, product)}>
        <div className="addToCartButton">Add To Cart</div>
      </Link>
    </div>
  );
};

export default AddtoCart;
