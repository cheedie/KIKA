import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavbarContext from '../../context/navbar_context';
import '../../styles/navbar/navlinks.scss';

const NavLinks = () => {
  const { marketPlaceMenu, showDropDown, hideDropDown } =
    useContext(NavbarContext);
  return (
    <div className="navLinks">
      <ul className="nav__linksContainer">
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
          <Link to="/products">MarketPlace</Link>
        </li>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>

        <li>Sell on KIKA</li>
      </ul>

      <div
        className="marketPlace__dropDown"
        style={marketPlaceMenu}
        onMouseEnter={showDropDown}
        onMouseLeave={hideDropDown}
      >
        <Link to="/products/men">
          <div onClick={hideDropDown}>
            <p>Shop Men</p>
          </div>
        </Link>
        <Link to="/products/women">
          <div onClick={hideDropDown}>
            <p>Shop Women</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
