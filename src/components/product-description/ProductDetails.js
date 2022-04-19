import React from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import Sidebar from '../sidebar/Sidebar'

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Sidebar/>
      </section>
      <Footer/>
    </div>
  )
}

export default ProductDetails