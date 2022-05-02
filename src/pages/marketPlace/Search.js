import React, { useState, useContext } from 'react';
import Footer from '../../components/landing-page/Footer';
import Navbar from '../../components/landing-page/Navbar';
import { useProductContext } from '../../context/product_context';
import Product from '../../components/Product/Product';
import NavbarContext from '../../context/navbar_context';
import Loading from '../../components/User/Loading';
import Error from '../../components/User/Error';

const Search = () => {
  const { keyWord } = useContext(NavbarContext);
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
    <div>
      <Navbar />
      <div className="search__result">
        {products
          .filter((product) => {
            if (keyWord === '') {
              return product;
            } else if (
              product.name
                .toLowerCase()
                .includes(keyWord.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => {
            return (
              <Product
                key={product._id}
                {...product}
                className="product"
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
