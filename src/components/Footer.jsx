import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer data-testid="footer">
        <input data-testid="drinks-bottom-btn" type="image" src={drinkIcon} alt="drink" />
        <input data-testid="explore-bottom-btn" type="image" src={exploreIcon} alt="explore" />
        <input data-testid="food-bottom-btn" type="image" src={mealIcon} alt="food" />
      </footer>
    );
  }
}

export default Footer;
