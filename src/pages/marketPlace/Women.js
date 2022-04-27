import React from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../styles/MarketPlace/marketPlace.scss";
import { useProductContext } from "../../context/product_context";
import Loading from "../../components/User/Loading";
import Error from "../../components/User/Error";

const Women = () => {
  const {
    products_error: error,
    products_loading: loading,
    women,
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
          {women.map((product) => {
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

export default Women;
