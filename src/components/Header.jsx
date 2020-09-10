/* import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
// importar searchBar

const Header = ({ children, esconde }) => {
  const [display, setDisplay] = useState(false);

  return (
    <main>
      <div className="header-top">
        <Router>
        <Link to="/perfil">
          <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
        </Link>
        </Router>
        <h2 data-testid="page-title">{children}</h2>
        {esconde ? null : (
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
    </main>
  );
};

export default Header; */
