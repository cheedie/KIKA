import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../assets/navbar/search.png';
import NavbarContext from '../../context/navbar_context';

const SearchForm = () => {
  const { handleSubmit, handleSearch, changeKeyWord, showSearch } =
    useContext(NavbarContext);
  return (
    <div>
      <form className="nav__searchForm" onSubmit={handleSubmit}>
        <input
          className="nav__searchBar show-modal"
          type="text"
          placeholder="Search"
          onChange={changeKeyWord}
        />
        <Link to="/search">
          <button
            className="span"
            type="submit"
            onClick={handleSearch}
          >
            <img
              className="nav__searchIcon"
              src={searchIcon}
              alt="Search Icon"
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchForm;
