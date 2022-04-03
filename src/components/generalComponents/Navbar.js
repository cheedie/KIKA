import React from "react";
import logo from "../../assets/vendor/navbar-assets/kika-logo-txt.png";
import { ReactComponent as Menu } from "../../assets/vendor/navbar-assets/hamburger.svg";
import { ReactComponent as Cart } from "../../assets/vendor/navbar-assets/cart.svg";
import { ReactComponent as Search } from "../../assets/vendor/navbar-assets/search.svg";
const Navbar = () => {
  return (
    <section className="nav__main-container">
      <div className="nav__section-center">
        <div className="nav__container">
          <img src={logo} alt="" />
          <div className="nav__mobile-btns">
            <button type="button" className="nav__search-btn">
              <Search />
            </button>
            <button type="button" className="nav__cart-btn">
              <Cart />
            </button>
            <button type="button" className="nav__menu-btn">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
