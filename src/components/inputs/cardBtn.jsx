import React from 'react';
import '../../index.css';

class CardBtn extends React.Component {
  render() {
    return (
      <button type="button" className="start-recipe" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    );
  }
}
export default CardBtn;
