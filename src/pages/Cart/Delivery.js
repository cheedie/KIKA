import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/landing-page/Footer";
import DeliveryForm from '../../components/Delivery/DeliveryForm';
import "../../styles/CartStyles/Delivery.css";

const Delivery = () => {
  return (
    <>
        <Navbar />
        <DeliveryForm />
        <Footer />
    </>
  )
}

export default Delivery