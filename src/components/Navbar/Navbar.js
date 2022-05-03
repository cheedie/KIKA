import React, { useState, useContext } from 'react';
import Logo from '../../assets/landing-page/logo.png';
import '../../styles/navbar/navbar.scss';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SearchForm from './SearchForm';
import MobileSidebar from './MobileSidebar';
import MobileSearch from './MobileSearch';
import Profile from './Profile';

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/">
        <img className="logo" src={Logo} alt="kika logo" />
      </Link>

      <section className="nav__rightSection">
        <NavLinks />
        <SearchForm />
        <Profile />
        <MobileSidebar />
        <MobileSearch />
      </section>
    </section>
  );
};
export default Navbar;
