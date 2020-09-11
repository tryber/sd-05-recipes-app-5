import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

const Header = ({ children, hideSearch }) => {
  const [display, setDisplay] = useState(false);

  return (
    <Fragment>
      <div>
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
        </Link>
        <h2 data-testid="page-title">{children}</h2>
        {hideSearch ? (
          <div className="search-icon-hidden" />
        ) : (
          <input
            data-testid="search-top-btn"
            src={searchIcon}
            type="image"
            onClick={() => {
              setDisplay(!display);
            }}
            alt="search icon"
          />
        )}
      </div>
      <div>{display && <SearchBar recipeType={children} />}</div>
    </Fragment>
  );
};

export default Header;
