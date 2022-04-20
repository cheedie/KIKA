import React from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import Sidebar from '../sidebar/Sidebar';
import ProductInfo from './ProductInfo';
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