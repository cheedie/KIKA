import React, { useContext } from 'react';
import NavbarContext from '../../context/navbar_context';
import searchIcon from '../../assets/navbar/search.png';
import '../../styles/navbar/mobile_search.scss';

const MobileSearch = () => {
  const { showSearch } = useContext(NavbarContext);
  return (
    <div>
      <div
        className={`${
          showSearch
            ? 'mobile__search show__mobileSearch'
            : 'mobile__search'
        }`}
      >
        <inputs
          type="text"
          placeholder="Search for anything"
          className="searchBar"
        />
        <img src={searchIcon} alt="search logo" />
      </div>
    </div>
  );
};

export default MobileSearch;
