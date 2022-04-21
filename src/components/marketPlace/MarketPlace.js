import React from "react";
import Footer from "../landing-page/Footer";
import Navbar from "../landing-page/Navbar";
import Product from "../Product/Product";
import Sidebar from "../sidebar/Sidebar";
import "../../styles/MarketPlace/marketPlace.scss";
import { useProductContext } from "../../context/product_context";
import Loading from "../User/Loading";
import Error from "../User/Error";

const MarketPlace = () => {
  const {
    products_error: error,
    products_loading: loading,
    products,
  } = useProductContext();

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="marketPlace">
      <Navbar />
      <div className="marketPlace__content">
        <Sidebar />
        <section className="marketPlace__products">
          {products.map((product) => {
            return (
              <Product key={product._id} {...product} className="product" />
            );
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
