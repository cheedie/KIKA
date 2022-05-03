import React, { useContext } from 'react';
import NavbarContext from '../../context/navbar_context';
import { Link } from 'react-router-dom';

const MobileSidebar = () => {
  const { showLinks, setShowLinks, setStatus } =
    useContext(NavbarContext);

  return (
    <div>
      <ul
        onClick={() => {
          setShowLinks(!showLinks);
          setStatus('close');
        }}
        className={`${
          showLinks
            ? 'mobile__sideBar show__sideBar'
            : 'mobile__sideBar'
        }`}
      >
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/marketplace">
          <li>Market Place</li>
        </Link>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link to="/vendor">
          <li>Sell on KIKA</li>
        </Link>
        <li>
          <button className="btn">Sign up</button>
        </li>
        <li>
          <button className="btn">Sign in</button>
        </li>
      </ul>
    </div>
  );
};

export default MobileSidebar;
