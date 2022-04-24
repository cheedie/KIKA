import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/Home/home.scss";
import Product from "../../components/Product/Product";
import { useProductContext } from "../../context/product_context";
import Loading from "../../components/User/Loading";
import Error from "../../components/User/Error";

const HomePage = () => {
  const {
    products_error: error,
    products_loading: loading,
    new_arrivals,
    products,
  } = useProductContext();

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="home">
      <Navbar />
      {/* Hero */}
      <section className="home__hero">
        <div className="home__info">
          <h1>
            Welcome to <span>KIKA</span>
          </h1>
          <p className="sub__heading">Home of all thrift wears</p>
          <p className="details">
            At KIKA we understand the importance of thrift wears and its
            availability to you and the need to get them at your comfort with
            just your smart device.
          </p>
        </div>

        <div className="buttons__grp">
          <Link to="/products/women">SHOP WOMEN</Link>
          <Link to="/products/men">SHOP MEN</Link>
        </div>
      </section>
      {/* End hero

      {/* man and woman section */}
      <section className="man__and__woman">
        <div className="images__container">
          <div className="man">
            <div className="btn__container">
              <button>SHOP WOMEN</button>
            </div>
          </div>
          <div className="woman">
            <div className="btn__container">
              <button>SHOP MEN</button>
            </div>
          </div>
        </div>

        <div className="home__products">
          {products
            .filter((_, index) => index < 3)
            .map((product) => {
              return (
                <Product key={product._id} {...product} className="product" />
              );
            })}
        </div>
      </section>
      {/* End man and woman */}

      {/* start new arrivals */}
      <section className="new__arrivals">
        <h2>NEW ARRIVALS</h2>

        <div className="products__container">
          {new_arrivals.map((product) => {
            return (
              <Product key={product._id} {...product} className="product" />
            );
          })}
        </div>
      </section>
      {/* start new arrivals */}
      <Footer />
    </section>
  );
};

export default HomePage;
