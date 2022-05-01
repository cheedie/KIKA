import React, { useEffect } from 'react';
import { useProductContext } from '../../context/product_context';
import { single_product_url as url } from '../../utils/constant';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../../styles/product/productDetails.scss';
import { MdOutlineStarBorder } from 'react-icons/md';
import Product from '../Product/Product';
import Loading from '../User/Loading';
import Error from '../User/Error';
import AddToCart from '../Cart/AddtoCart';

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products,
  } = useProductContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    size,
    image,
    grade,
    color,
    vendor,
    countInStock,
  } = product;

  return (
    <section className="productInfo__container">
      <div className="content">
        <img src={image} alt={name} />
        <img src={image} alt={name} />
        <section className="product__data">
          <h3>{name}</h3>
          <p>
            <span>Size:</span> <span>{size}</span>
          </p>
          <p>
            <span>Grade:</span> <span>{grade}</span>
          </p>
          <p>
            <span>Color:</span> <span>{color}</span>
          </p>
          <p>
            <span>Vendor:</span> <span>{vendor}</span>
          </p>
          <p>
            <span>Price:</span> <span>NGN {price}</span>
          </p>
          <div>
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </div>
          {countInStock > 0 && <AddToCart product={product} />}
        </section>
      </div>

      <div className="more__products">
        <div className="share__this__product">
          <p>SHARE THIS PRODUCT</p>
          <p>COPY LINK</p>
        </div>
        <div className="products">
          {products
            .filter((_, index) => index < 4)
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
      </div>
    </section>
  );
};

export default ProductInfo;
