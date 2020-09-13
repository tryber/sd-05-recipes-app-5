import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer data-testid="footer">
    <Link to="/bebidas">
      <input data-testid="drinks-bottom-btn" type="image" src={drinkIcon} alt="drink" />
    </Link>
    <Link to="/explorar">
      <input data-testid="explore-bottom-btn" type="image" src={exploreIcon} alt="explore" />
    </Link>
    <Link to="/comidas">
      <input data-testid="food-bottom-btn" type="image" src={mealIcon} alt="food" />
    </Link>
  </footer>
);

export default Footer;
