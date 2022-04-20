import React, { useEffect } from "react";
import { useProductContext } from "../../context/product_context";
import { single_product_url as url } from "../../utils/constant";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../../styles/product/productDetails.scss";
import { MdOutlineStarBorder } from "react-icons/md";
import Product from "../Product/Product";
import Loading from "../User/Loading";
import Error from "../User/Error";
import AddToCart from "../Cart/AddtoCart";

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { name, price, size, image, grade, color, vendor } = product;

  return (
    <section className="productInfo__container">
      <div className="content">
        <img src={image} alt="" />
        <img src={image} alt="" />
        <section className="product__data">
          <h3>{name}</h3>
          <p>
            Size: <span>{size}</span>
          </p>
          <p>
            Grade: <span>{grade}</span>
          </p>
          <p>
            Color: <span>{color}</span>
          </p>

          <p>
            Vendor: <span>{vendor}</span>
          </p>
          <p>
            Price: <span>NGN {price}</span>
          </p>
          <div>
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </div>

          <AddToCart />
        </section>
      </div>
      <div className="share__this__product">
        <p>SHARE THIS PRODUCT</p>
        <p>COPY LINK</p>
      </div>

      <div className="more__products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default ProductInfo;
