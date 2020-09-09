import React from 'react';
import drinkIcon from '../images/drinkIcon.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer data-testid="footer">
          <button data-testid="drinks-bottom-btn"><img src={drinkIcon} alt="drink"/></button>
          <button data-testid="explore-bottom-btn"></button>
          <button data-testid="food-bottom-btn"></button>
      </footer>
    );
  }
}

export default Footer;
