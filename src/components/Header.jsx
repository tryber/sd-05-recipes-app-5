import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

const Header = ({ children, hideSearch }) => {
  const [display, setDisplay] = useState(false);
  const {
    location: { pathname },
  } = useHistory();
  return (
    <Fragment>
      <div>
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="profile" />
        </Link>
        <h2 data-testid="page-title">{pathname === '/comidas' ? 'Comidas' : 'Bebidas'}</h2>
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
      <div>{display && <SearchBar receitas={children} />}</div>
    </Fragment>
  );
};
Header.propTypes = {
  children: PropTypes.string.isRequired,
  hideSearch: PropTypes.bool.isRequired,
};
export default Header;
