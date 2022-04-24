<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { FaTrash, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import "../../styles/CartStyles/MyCart.css";

const CartCard = ({
    cartImg,
    cartTitle,
    priceTitle,
    size,
    clothSize,
    grade,
    clothGrade,
    color,
    clothColor,
    type,
    clothType,
    vendor,
    clothVendor,
    price,
    clothPrice,
}) => {
  return (
    <>
        <section className='card_section'>
            <div className='card_row'>
                <div className='cartImg'>
                    <img src={cartImg} alt="cart_image" className='cart_image' />
                </div>
                <div className="cart_details">
                    <div className='cartTitle'>
                        <h1>{cartTitle}</h1>
                        <p>{priceTitle}</p>
                    </div>
                    <div className='card_details'>
                        <div className='cloth_Details' >
                            <p>{size}</p>
                            <p>{clothSize}</p>
                        </div>
                        <div className='cloth_Details' >
                            <p>{grade}</p>
                            <p>{clothGrade}</p>
                        </div>
                        <div className='cloth_Details' >
                            <p>{color}</p>
                            <p>{clothColor}</p>
                        </div>
                        <div className='cloth_Details' >
                            <p>{type}</p>
                            <p>{clothType}</p>
                        </div>
                        <div className='cloth_Details' >
                            <p>{vendor}</p>
                            <p>{clothVendor}</p>
                        </div>
                        <div className='cloth_Details' >
                            <p>{price}</p>
                            <p>{clothPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='removeItems'>
                    <FaTrash className='card_icon' />
                    <p className='card_icon'>Remove</p>
                </div>
                <div className='increaseItems'>
                    <FaMinusCircle className='card_icon' />
                    <p> 1 </p>
                    <FaPlusCircle className='card_icon' />
                </div>
=======
import React from "react";

import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";

const CartCard = ({ image, name, price, id, size }) => {
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
              {/* <div className="cloth_Details">
                <p>{color}</p>
                <p>{clothColor}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{type}</p>
                <p>{clothType}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{vendor}</p>
                <p>{clothVendor}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{price}</p>
                <p>{clothPrice}</p>
              </div> */}
>>>>>>> 560449a3562e90df324b583d51d8a5b5c9725abd
=======

import React from "react";

import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "../../styles/CartStyles/MyCart.css";

const CartCard = ({ image, name, price, id, size }) => {
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
              {/* <div className="cloth_Details">
                <p>{color}</p>
                <p>{clothColor}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{type}</p>
                <p>{clothType}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{vendor}</p>
                <p>{clothVendor}</p>
              </div> */}
              {/* <div className="cloth_Details">
                <p>{price}</p>
                <p>{clothPrice}</p>
              </div> */}

>>>>>>> a61f2208f2c7ccdbb2ceec1d27890941643f860a
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <div className="removeItems">
            <FaTrash className="card_icon" />
            <p>Remove</p>
          </div>
          <div className="increaseItems">
            <FaMinusCircle className="card_icon" />
            <p> 1 </p>
            <FaPlusCircle className="card_icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartCard;
