import React from 'react';
import Navbar from '../../components/landing-page/Navbar';
import Footer from '../../components/landing-page/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductInfo from '../../components/product-description/ProductInfo';
import '../../styles/product/productDetails.scss'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <section className='productDetails'>
        <Sidebar />
        <ProductInfo/>
      </section>
      <Footer/>
    </div>
  )
}

export default ProductDetails;