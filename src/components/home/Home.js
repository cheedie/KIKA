import React from 'react';
import Navbar from '../landing-page/Navbar';
import Footer from '../landing-page/Footer';
import '../../styles/Home/home.scss';
import Product from '../Product/Product';

const HomePage = () => {
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
            At KIKA we understand the importance of thrift wears and
            its availability to you and the need to get them at your
            comfort with just your smart device.
          </p>
        </div>

        <div className="buttons__grp">
          <button>SHOP WOMEN</button>
          <button>SHOP MEN</button>
        </div>
      </section>
      {/* End hero */}

      {/* man and woman section */}
      <section className="man__and__woman">
        <div className='images__container'>
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
          <Product/>
          <Product/>
          <Product/>
        </div>
      </section>
      {/* End man and woman */}
      <Footer />
    </section>
  );
};

export default HomePage;
